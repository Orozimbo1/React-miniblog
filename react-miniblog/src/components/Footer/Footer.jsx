import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles ? styles.footer : undefined}>
      <h3>Escreva sobre o que você tem interesse</h3>
      <p>Mini Blog &copy; 2023</p>
    </footer>
  )
}

export default Footer