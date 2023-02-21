// CSS
import styles from './About.module.css'

import { Link } from 'react-router-dom' 

const About = () => {
  return (
    <div className={styles ? styles.about : undefined}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito em React no front-end e Firebase no back-end.</p>
      <Link to='/posts/create' className='btn'>
        Criar post
      </Link>
    </div>
  )
}

export default About