import { db } from '../firebase/config'

import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut    
  } from 'firebase/auth'

import { useState, useEffect } from 'react'

const useAuthentication = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  function checkIfIsCancelled() {
    if(cancelled) {
      return
    }
  }

  // register
  const createUser = async (data) => {
    checkIfIsCancelled()

    setLoading(true)
    setError('')

    try{

      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.displayName
      })
 
      setLoading(false)

      return user
      
    } catch(error) {

      console.log(error.message)
      console.log(typeof error.message)

      let systemErrorMessage

      if(error.message.includes('auth/weak-password')) {
        systemErrorMessage = 'A senha deve conter pelo menos 6 caracteres.'
      } else if(error.message.includes('auth/email-already-in-use')) {
        systemErrorMessage = 'Email já cadastrado.'
      } else {
        systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
      }

      setError(systemErrorMessage)
      setLoading(false)
    }

  }

  // logout
  const logout = () => {
    checkIfIsCancelled()

    signOut(auth)
  }

  // login
  const login = async (data) => {

    checkIfIsCancelled()

    setLoading(true)
    setError(false)

    try {

      await signInWithEmailAndPassword(auth, data.email, data.password)
      setLoading(false)

    } catch (error) {

      let systemErrorMessage

      if(error.message.includes('user-not-found')) {
        systemErrorMessage = 'Usuário não existe.'
      } else if(error.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha incorreta.'
      } else {
        systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
      }

      setError(systemErrorMessage)
      setLoading(false)
    }

  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  }
}

export default useAuthentication;