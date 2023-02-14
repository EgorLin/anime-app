import ControlPanel from '../ControlPanel/ControlPanel'
import Nav from '../Nav/Nav'
import Logo from '../UI/Logo/Logo'
import styles from './Header.module.scss'

function HeaderItem() {
  return (
    <header className={[styles.header, 'wrapper'].join(' ')}>
      <Logo />
      <Nav />
      <ControlPanel />
    </header>
  )
}

export default HeaderItem
