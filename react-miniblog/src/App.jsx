import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages
import { Home, About, Login, Register } from './page'

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
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
