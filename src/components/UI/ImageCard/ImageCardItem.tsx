import Bookmark from '../Bookmark/Bookmark'
import styles from './ImageCard.module.scss'

interface IProps {
  id?: string
  className?: string
}

function ImageCardItem({ id, className }: IProps) {
  return (
    <div id={id} className={[styles.container, className].join(' ')}>
      <img
        className={styles.img}
        src='https://2.bp.blogspot.com/-UAZx3kxPEmA/VrxH1X89yII/AAAAAAAAAEw/-JgxE8GPWXI/s1600/221298.jpg'
      />
      <Bookmark className={styles.bookmark}/>
      <span className={styles.title}>Pipi popo</span>
      <div className={styles.genres}>
        <span className={styles.genre}>Comedy</span>
        <span className={styles.genre}>Documentary</span>
      </div>
    </div>
  )
}

export default ImageCardItem
