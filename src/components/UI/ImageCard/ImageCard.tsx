import { ReactElement } from 'react'
import ImageCardItem from './ImageCardItem'

interface IProps {
  id?: string
  className?: string
}

function ImageCard({ id, className }: IProps): ReactElement {
  return <ImageCardItem id={id} className={className} />
}

export default ImageCard
