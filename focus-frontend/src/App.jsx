import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Focus from './components/focus/Focus'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Focus />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
