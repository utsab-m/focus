import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Tasks from './components/tasks/Tasks'

function App() {

  return (
    <>
      <BrowserRouter>
        <div class="flex flex-col h-screen">
          <Header />
          <Tasks />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
