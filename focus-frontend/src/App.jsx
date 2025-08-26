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
          <Header />
          <Routes>
            {/* http://localhost:5173 */}
            <Route path="/" element={<MainPage />}></Route>
            {/* http://localhost:5173/login */}
            <Route path="/login" element={<LoginPage />}></Route>
            {/* http://localhost:5173/signup */}
            <Route path="/signup"></Route>
            
          </Routes>
          <Footer />
        </BrowserRouter>

      </ErrorBoundary>
      
    </>
  )
}

export default App
