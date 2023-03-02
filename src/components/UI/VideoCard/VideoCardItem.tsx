import { ReactElement } from 'react'
import Bookmark from '../Bookmark/Bookmark'
import PlayIcon from '../PlayIcon/PlayIcon'
import styles from './VideoCard.module.scss'

interface IProps {
  id?: string
  className?: string
}

function VideoCardItem({ id, className }: IProps): ReactElement {
  return (
    <div id={id} className={[styles.container, className].join(' ')}>
      <div className={styles.imageContainer}>
        <PlayIcon className={styles.playButton} />
        <img
          className={styles.img}
          src='https://2.bp.blogspot.com/-UAZx3kxPEmA/VrxH1X89yII/AAAAAAAAAEw/-JgxE8GPWXI/s1600/221298.jpg'
        />
      </div>
      <Bookmark className={styles.bookmark} />
      <span className={styles.lastEpisode}>11</span>
      <span className={styles.title}>Pipi popo</span>
      <span className={styles.genres}>
        <span className={styles.genre}>Comedy</span>
        <span className={styles.genre}>Documentary</span>
      </span>
    </div>
  )
}

export default VideoCardItem
