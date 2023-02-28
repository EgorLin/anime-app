import { ReactElement } from 'react'
import styles from './Nav.module.scss'

interface IProps {
  className?: string
}

function NavItem({ className }: IProps):ReactElement {
  return (
    <nav className={className}>
      <ul className={styles.nav}>
        <li>Home</li>
        <li>New releases</li>
        <li>About us</li>
      </ul>
    </nav>
  )
}

export default NavItem
