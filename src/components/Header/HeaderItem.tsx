import Nav from '../Nav/Nav'
import styles from './Header.module.scss'

function HeaderItem() {
  return (
    <header className={['wrapper', styles.header].join(' ')}>
      <Nav />
    </header>
  )
}

export default HeaderItem
