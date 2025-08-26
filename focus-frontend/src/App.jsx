import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Tasks from './components/tasks/Tasks'
import ErrorBoundary from './components/error/ErrorBoundary'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

function App() {

  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            {/* http://localhost:5173 */}
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup"></Route>
            
          </Routes>
          
        </BrowserRouter>

      </ErrorBoundary>
      
    </>
  )
}

export default App
