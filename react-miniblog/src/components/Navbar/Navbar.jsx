import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

// hook
import { useAuthentication } from '../../hooks'

// context
import { useAuthValue } from '../../context/AuthContext'

const Navbar = () => {
  const { user } = useAuthValue()

  const { logout } = useAuthentication()

  return (
    <nav className={styles ? styles.navbar : undefined}>
      <NavLink to='/' className={styles ? styles.brand : undefined}>
        Mini<span>Blog</span>
      </NavLink>
      <ul className={styles ? styles.links_list : undefined}>
        <li>
          <NavLink to='/' className={({isActive}) => (isActive ? styles.active : undefined)}>Home</NavLink>
        </li>
        {!user ? (
          <>
            <li>
              <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : undefined)}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to='/register' className={({isActive}) => (isActive ? styles.active : undefined)}>Cadastrar</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/posts/create' className={({isActive}) => (isActive ? styles.active : undefined)}>Novo Post</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active : undefined)}>Dashboard</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : undefined)}>Sobre</NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar