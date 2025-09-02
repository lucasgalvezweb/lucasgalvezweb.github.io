import React, { useEffect, useRef, useState } from 'react'
import { NavBar } from '../../components'
import { customTimeText } from '../../helpers/helpful'
import trashIcon from '../../assets/icons/trash-icon.png'
import editIcon from '../../assets/icons/edit-icon.png'
import calcIcon from '../../assets/icons/calculator-icon.png'
import { useIntersectionAnimation } from '../../hooks';
import { v4 as uuidv4 } from 'uuid'

const sampleInitialState = [
  {
    date: "15 de Diciembre, 2023",
    id: uuidv4(),
    name: "Ejemplo: Sueldo neto menos descuentos",
    operation: "2000-200",
    result: "1800.00"
  },
  {
    date: "21 de Diciembre, 2023",
    id: uuidv4(),
    name: "Ejemplo: Pastel de cumple y decoración",
    operation: "80+150",
    result: "130.00"
  },
  {
    date: "14 de Enero, 2024",
    id: uuidv4(),
    name: "Ejemplo: Pasaje ida al trabajo y desayuno",
    operation: "15+5",
    result: "20.00"
  }
]

export const SuperCalc = () => {

  const existingRows = JSON.parse(localStorage.getItem('historial'))

  const [currentValue, setCurrentValue] = useState('')
  const [currentValueToShow, setCurrentValueToShow] = useState('')
  const [result, setResult] = useState('0')
  const [resultToShow, setResultToShow] = useState('0')
  const [historial, setHistorial] = useState(existingRows === null ? sampleInitialState : existingRows)
  const [isOpen, setIsOpen] = useState(false)
  const [historyItemName, setHistoryItemName] = useState('')
  const [idToEdit, setIdToEdit] = useState('')
  const { ref, isVisible } = useIntersectionAnimation()

  const historyItemNameRef = useRef(null)

  const openModal = (id) => {
    const objectToEditName = historial.find(item => item.id === id)
    setHistoryItemName(objectToEditName.name)
    setIsOpen(true);
    setIdToEdit(id)
  };

  const closeModal = () => {
    setIsOpen(false)
  };

  const listMenu = [
    {
      name: 'Inicio',
      route: '/',
      scrollTo: null,
      isShown: true
    },
    {
      name: 'Menú de miniapps',
      route: '/miniapps',
      scrollTo: null,
      isShown: true
    }
  ]

  let operatorsList = ["+", "-", "*", "/"] // List to handle operators in UI
  const lastChar = currentValue.charAt(currentValue.length - 1) // Last character in current value
  const historyArray = [...historial] // New array made of the history object
  const historyInverted = historyArray.reverse()

  // Update history every time the user calculates something
  useEffect(() => {
    updateHistory()
  }, [result])

  // Save history in localstorage
  useEffect(() => {
    localStorage.setItem('historial', JSON.stringify(historial))
    setCurrentValue('')
    setResult('')
  }, [historial])

  // Focus on input when trying to edit the name
  useEffect(() => {
    if (isOpen) {
      historyItemNameRef.current.focus()
    }
  }, [isOpen])

  // Update historial
  const updateHistory = () => {
    const newId = uuidv4();
    if (currentValue !== '') {
      setHistorial([
        ...historial,
        {
          id: newId,
          operation: currentValue,
          result: result,
          date: customTimeText.currentDateMonthNameES,
          name: ''
        }
      ])
    }
  }

  // Manage the numbers and point
  const handleNumericClick = (number) => {

    const realCurrentValue = currentValue + number
    const isZeroOnlyChar = currentValue === "0";

    operatorsList = ["\\+", "-", "\\*", "/"]
    const regex = new RegExp(operatorsList.join("|"), "g");
    const realCurrentValueArray = currentValue.split(regex)

    const realCurrentValueArrayLastItem = realCurrentValueArray[realCurrentValueArray.length - 1]
    const itHasDecimalPoint = realCurrentValueArrayLastItem.includes(".")

    if ((isZeroOnlyChar && currentValue.length === 1 && number !== ".") || realCurrentValue === ".") {
      return false
    } else if (itHasDecimalPoint && number === ".") {
      return false
    }

    setCurrentValue(realCurrentValue)

  }

  // Manage operators
  const handleOperatorClick = (operator) => {

    // Avoid operations if last character is "."
    // Avoid operations with empty characters
    // Verify current value is not empty and the button is an operator
    if (lastChar === "." || currentValue === "" || !operatorsList.includes(operator)) {
      return false
    }

    if (operatorsList.includes(lastChar)) { // Verify that the last char is an operator
      setCurrentValue(currentValue.slice(0, -1) + operator) // Always replace the last operator with the new one
    } else if (currentValue !== "") { // If the last char is not an operator, just add it to the string
      setCurrentValue(currentValue + operator)
    } else {
      setCurrentValue(result + operator) // If current value is empty take the current result into current value
    }
  }

  // Simple function to get the result
  const calculateResult = (operation) => {
    return eval(operation).toFixed(2)
  }

  // Manage the equal button
  const handleEqual = () => {

    // Avoid calculate operations if the last character is "."
    if (lastChar === ".") {
      return false
    }

    try {
      if (currentValue !== "") {
        if (operatorsList.includes(lastChar)) { // Verify if last char is an operator
          setCurrentValue(currentValue.slice(0, -1))
        } else {
          const result = calculateResult(currentValue).toString() // If not just calculate
          setResult(result)
          setResultToShow(result)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  // Handle the reset button
  const handleC = () => {
    setCurrentValue('')
    setResultToShow('0')
  }

  // Handle x button
  const handleErase = () => {
    const newCurrentValue = currentValue.slice(0, -1)
    setCurrentValue(newCurrentValue)
  }

  // Handle history item name
  const handleEditHistoryName = (id) => {
    const objectToEdit = historial.find(obj => obj.id === id)
    if (objectToEdit) {
      objectToEdit.name = historyItemName
    }
    setHistorial([...historial])
    closeModal()
    setHistoryItemName('')
  }

  const handleDeleteHistory = (id) => {
    const historyAfterDetele = historial.filter(item => item.id !== id)
    setHistorial(historyAfterDetele)
  }

  const hangleEditHistoryInput = (event) => {
    setHistoryItemName(event.target.value)
  }

  const handleRecalc = (id) => {
    const objectToRecalc = historial.find(obj => obj.id === id)
    let result = objectToRecalc.result
    const isNegative = result.includes("-")
    // console.log(isNegative)
    if (isNegative) {
      result = result.replace("-", "")
    }
    setCurrentValue(currentValue + result)
  }

  // List with the buttons and all the actions
  const buttonList = [
    {
      value: 'blank',
      operation: '',
      type: 'symbol',
      color: 'black'
    },
    {
      value: 'C',
      operation: handleC,
      type: 'symbol',
      color: 't2-dark-silver'
    },
    {
      value: 'B',
      operation: handleErase,
      type: 'symbol',
      color: 't2-dark-silver',
      imgPath: ''
    },
    {
      value: '/',
      operation: handleOperatorClick,
      type: 'symbol',
      color: 't2-dark-silver'
    },
    {
      value: '7',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '8',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '9',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '*',
      operation: handleOperatorClick,
      type: 'symbol',
      color: 't2-dark-silver',
      label: "x"
    },
    {
      value: '4',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '5',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '6',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '-',
      operation: handleOperatorClick,
      type: 'symbol',
      color: 't2-dark-silver'
    },
    {
      value: '1',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '2',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '3',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '+',
      operation: handleOperatorClick,
      type: 'symbol',
      color: 't2-dark-silver'
    },
    {
      value: 'blank',
      operation: '',
      type: 'symbol',
      color: 'black'
    },
    {
      value: '0',
      operation: handleNumericClick,
      type: 'number',
      color: 'ct2-fourth'
    },
    {
      value: '.',
      operation: handleNumericClick,
      type: 'symbol',
      color: 't2-dark-silver'
    },
    {
      value: '=',
      operation: handleEqual,
      type: 'symbol',
      color: 't2-dark-silver'
    },
  ]

  return (
    <div className='bg-ct2-fourth' ref={ref}>
      <NavBar listMenu={listMenu} />
      <section className={`min-h-screen items-center xl:px-28 lg:px-16 justify-center pt-20 md:py-24 md:pt-20 ${isVisible ? 'animate-fade-up' : ''} animate-duration-900`}>
        <div className={`container mx-auto px-4 md:px-0`}>
          <h1 className='text-4xl font-semibold text-white my-4'>SuperCalc</h1>
          <h2 className='text-md font-light text-white'>Has operaciones del día a día, <span className='font-semibold'>ponles nombre para recordarlas luego y usalas en otros cálculos.</span></h2>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 mt-5'>
            <div className='bg-cc-first rounded-xl py-4 px-4 max-h-[512px]'>
              <div className='flex justify-between h-10 text-2xl font-light'>
                <span className='ml-3 text-[20px] text-white font-normal'>Operación</span>
                <span className='mr-2 tracking-[5px] text-white'>{currentValue}</span>
              </div>
              <div className='flex justify-between h-10 text-2xl font-normal'>
                <span className='ml-3 text-[20px] text-white'>Resultado</span>
                <span className='mr-3 text-white'>{resultToShow}</span>
              </div>
              <div className='grid grid-cols-4 items-center justify-center'>
                {
                  buttonList.map(({ value, operation, type, color, label, imgPath }, index) => (
                    <button
                      disabled={value === "blank"}
                      key={index}
                      className={`my-2 mx-2 py-2 md:py-4 px-2 bg-${color} ${value === 'blank' ? 'text-' + color : 'text-white'} text-md md:text-2xl lg:text-2xl rounded font-semibold ${value !== 'blank' && 'hover:bg-white hover:text-black'}`}
                      onClick={() => operation(value)}
                    >
                      {
                        imgPath
                          ?
                          <img loading='lazy' className='mx-auto w-[24px] md:w-[31px]' src={imgPath} alt="Icon" />
                          :
                          label ?? value
                      }
                    </button>
                  ))
                }
              </div>
              <div className='my-10 hidden md:block'>
                <p className='text-white italic text-sm px-5'>Importante: Los calculos mostrados en el historial se guardan en la memoria de tu navegador, <span className='font-semibold'>este sitio no almacena ni envía los registros a ninguna base de datos o servicio externo en la nube.</span></p>
              </div>
            </div>
            <div className='bg-cc-first rounded-xl py-4 px-4 mb-5 max-h-[70vh]'>
              <h2 className='text-3xl mb-2 text-cc-first text-white'>Historial</h2>
              <div className='my-2 max-h-[50vh] md:max-h-[60vh] lg:max-h-[60vh] overflow-y-auto div-con-scroll'>
                {
                  historyInverted.map(({ operation, result, name, id, date }, index) => (
                    <div key={id} className='rounded-xl my-2 py-2 pl-3 pr-3 mr-4 bg-ct2-fourth'>
                      <div>
                        <button onClick={() => openModal(id)} className='bg-t2-dark-silver px-2 py-1 rounded-md flex items-center text-white font-light'>{name === '' ? 'Añadir descripción' : name}
                          <img loading='lazy' className='ml-3' src={editIcon} alt="Edit icon button" />
                        </button>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div>
                          <span className='text-md lg:text-xl tracking-[5px] font-normal text-white'>{index + 1}. {operation} = {result}</span><br />
                          <span className='font-light text-sm italic text-white'>{date}</span>
                        </div>
                        <div className='max-content'>
                          <button onClick={() => handleRecalc(id)} className='text-white font-semibold text-xl justify-end pr-2 py-2'><img src={calcIcon} alt="Recalc icon" /></button>
                          <button onClick={() => handleDeleteHistory(id)} className='text-white font-semibold text-xl justify-end py-2'><img src={trashIcon} alt="Trash icon" /></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>

              <form className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {isOpen && (
                  <div className="modal text-white bg-ct2-fourth rounded-md font-semibold text-xl flex flex-col py-4 px-4 shadow-2xl shadow-black animate-fade-down animate-duration-500">
                    <div className="modal-content">
                      <span className='mb-4'>Describe tu cálculo</span><br />
                      <input ref={historyItemNameRef} className='mt-4 px-2 py-2 rounded-md text-black' value={historyItemName} onChange={hangleEditHistoryInput} type="text" />
                    </div>
                    <div className='flex items-center justify-between pt-4'>
                      <button type='submit' onClick={() => handleEditHistoryName(idToEdit)} className='text-white bg-t2-dark-silver rounded-md font-semibold text-xl py-2 px-4'>Guardar</button>
                      <button className='text-white bg-t2-dark-silver rounded-md font-semibold text-xl py-2 px-4' onClick={closeModal}>Cancelar</button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className='pb-6 pt-3 block md:hidden'>
            <p className='text-white italic text-sm px-5'>Importante: Los calculos mostrados en el historial se guardan en la memoria de tu navegador, <span className='font-semibold'>este sitio no almacena ni envía los registros a ninguna base de datos o servicio externo en la nube.</span></p>
          </div>
        </div>
      </section>
    </div>
  )
}
