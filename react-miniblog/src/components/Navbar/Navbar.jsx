import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles ? styles.navbar : undefined}>
      <NavLink to='/' className={styles ? styles.brand : undefined}>
        Mini<span>Blog</span>
      </NavLink>
      <ul className={styles ? styles.links_list : undefined}>
        <li>
          <NavLink to='/' className={({isActive}) => (isActive ? styles.active : undefined)}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : undefined)}>Entrar</NavLink>
        </li>
        <li>
          <NavLink to='/register' className={({isActive}) => (isActive ? styles.active : undefined)}>Cadastrar</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : undefined)}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar