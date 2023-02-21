import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages
import { Home, About } from './page'

// componentes
import { Navbar, Footer } from './components'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
