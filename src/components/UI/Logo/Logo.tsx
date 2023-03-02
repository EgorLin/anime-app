import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo/logo.png'
import { RouteNames } from '../../../router'
import styles from './Logo.module.scss'

function Logo(): ReactElement {
  return (
    <Link to={RouteNames.HOME}>
      <img className={styles.logo} src={logo} alt='Anime fun logo' />
    </Link>
  )
}

export default Logo
