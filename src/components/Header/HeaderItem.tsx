import ControlPanel from '../ControlPanel/ControlPanel'
import Nav from '../Nav/Nav'
import SearchPanelItem from '../SearchPanel/SearchPanelItem'
import Logo from '../UI/Logo/Logo'
import styles from './Header.module.scss'

function HeaderItem() {
  return (
    <header className={[styles.header, 'wrapper'].join(' ')}>
      <Logo />
      <Nav />
      <SearchPanelItem />
      <ControlPanel />
    </header>
  )
}

export default HeaderItem
