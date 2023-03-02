import { ReactElement } from 'react'
import VideoCard from '../UI/VideoCard/VideoCard'
import styles from './Catalog.module.scss'

interface IProps {
  className?: string
}

function CatalogItem({ className }: IProps): ReactElement {
  return (
    <div className={[styles.container, className, 'wrapperM'].join(' ')}>
      <h2 className={styles.title}>New releases</h2>
      <div className={styles.catalog}>
        <VideoCard className={styles.card} />
        <VideoCard className={styles.card} />
        <VideoCard className={styles.card} />
        <VideoCard className={styles.card} />
        <VideoCard className={styles.card} />
        <VideoCard className={styles.card} />
        <VideoCard className={styles.card} />
        <VideoCard className={styles.card} />
        <VideoCard className={styles.card} />
        <VideoCard className={styles.card} />
      </div>
    </div>
  )
}

export default CatalogItem
