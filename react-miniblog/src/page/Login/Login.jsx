import styles from './Login.module.css'

import { useState, useEffect } from 'react'

// hooks
import { useAuthentication } from '../../hooks'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    const user = {
      email,
      password
    }

    const res = await createUser(user)
  }

  useEffect(() => {

    if(authError) {
      setError(authError)
    }

  }, [authError])

  return (
    <div className={styles ? styles.login : undefined}>
      <h1>Entrar</h1>
      <p>Faça o login para utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="email" 
            name='email' 
            required 
            placeholder='Email do usuário' 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password" 
            name='password' 
            required 
            placeholder='Insira sua senha'
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        {!loading && <button className='btn'>Entrar</button>}
        {loading && <button disabled className='btn'>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login