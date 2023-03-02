import { ReactElement } from 'react'
import VideoCardItem from './VideoCardItem'

interface IProps {
  id?: string
  className?: string
}

function VideoCard({ id, className }: IProps): ReactElement {
  return <VideoCardItem id={id} className={className} />
}

export default VideoCard
