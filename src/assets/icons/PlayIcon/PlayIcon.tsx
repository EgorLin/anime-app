import { ReactElement } from 'react'
import PlayIconItem from './PlayIconItem'

interface IProps {
  className?: string
}

function PlayIcon({ className }: IProps): ReactElement {
  return <PlayIconItem className={className} />
}

export default PlayIcon
