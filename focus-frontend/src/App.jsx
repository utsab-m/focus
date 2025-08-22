import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Tasks from './components/tasks/Tasks'
import ErrorBoundary from './components/error/ErrorBoundary'

function App() {

  return (
    <>
      <BrowserRouter>
        <div class="flex flex-col h-screen">
          <ErrorBoundary>
            <Header />
            <Tasks />
            <Footer />
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
