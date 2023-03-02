import Catalog from '../../components/Catalog/Catalog'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SliderPanel from '../../components/SliderPanel/SliderPanel'
import styles from './Root.module.scss'

function Root() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <SliderPanel />
        <Catalog/>
      </main>
      <Footer />
    </div>
  )
}

export default Root
