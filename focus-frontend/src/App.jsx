import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Tasks from './components/tasks/Tasks'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Tasks />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
