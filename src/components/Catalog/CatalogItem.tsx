import { ReactElement } from 'react'
import VideoCard from '../UI/VideoCard/VideoCard'
import styles from './Catalog.module.scss'

function CatalogItem(): ReactElement {
  return (
    <div className={[styles.container, 'wrapperM'].join(' ')}>
      <VideoCard />
    </div>
  )
}

export default CatalogItem
