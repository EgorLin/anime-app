import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo/logo.png'
import styles from './Logo.module.scss'
function Logo() {
  return (
    <Link to="/">
      <img className={styles.logo} src={logo} alt='Anime fun logo' />
    </Link>
  )
}

export default Logo
