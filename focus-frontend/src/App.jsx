import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '/components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
