import { AppRouter } from './router/AppRouter'

import { register } from 'swiper/element/bundle';
register();

function App() {

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
