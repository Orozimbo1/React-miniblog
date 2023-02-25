import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

// hook
import { useAuthentication } from './hooks'

// context
import { AuthContextProvider } from './context/AuthContext'

// pages
import { Home, About, Login, Register, Dashboard, CreatePost, Search, Post } from './page'

// componentes
import { Navbar, Footer } from './components'

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthContextProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/search' element={<Search />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to='/login' />} />
              <Route path='/posts/:id' element={<Post />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  )
}

export default App
