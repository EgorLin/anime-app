import ControlPanel from '../ControlPanel/ControlPanel'
import Nav from '../Nav/Nav'
import SearchPanelItem from '../SearchPanel/SearchPanelItem'
import Logo from '../UI/Logo/Logo'
import styles from './Header.module.scss'

interface IProps {
  isWideScreen: boolean
}

function HeaderItem({ isWideScreen }: IProps) {
  return (
    <header className={[styles.header, 'wrapper'].join(' ')}>
      {isWideScreen ? (
        <>
          <Logo />
          <Nav />
          <SearchPanelItem />
          <ControlPanel />
        </>
      ) : (
        <>
          <Logo />
          <SearchPanelItem />
          <ControlPanel />
        </>
      )}
    </header>
  )
}

export default HeaderItem
