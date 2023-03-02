import { ReactElement } from 'react'
import ImageCard from '../UI/ImageCard/ImageCard'
import styles from './SliderPanel.module.scss'

function SliderPanelItem(): ReactElement {
  return (
    <div className={[styles.container, 'wrapperM'].join(' ')}>
      {/* <a href='#card-1' className={styles.button}> */}
      {/*   <svg viewBox='0 0 1024 1024'> */}
      {/*     <path d='M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z' /> */}
      {/*   </svg> */}
      {/* </a> */}
      <div className={styles.slider}>
        <ImageCard id='card-1' className={styles.card} />
        <ImageCard id='card-2' className={styles.card} />
        <ImageCard id='card-3' className={styles.card} />
        <ImageCard id='card-4' className={styles.card} />
        <ImageCard id='card-5' className={styles.card} />
      </div>
      {/* <a href='#card-4' className={[styles.button, styles.right].join(' ')}> */}
      {/*   <svg viewBox='0 0 1024 1024'> */}
      {/*     <path d='M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z' /> */}
      {/*   </svg> */}
      {/* </a> */}
    </div>
  )
}

export default SliderPanelItem
