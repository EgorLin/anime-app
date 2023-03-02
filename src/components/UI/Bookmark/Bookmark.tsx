import { ReactElement } from 'react'
import BookmarkItem from './BookmarkItem'

interface IProps {
  className?: string
}

function Bookmark({ className }: IProps): ReactElement {
  return <BookmarkItem className={className} />
}

export default Bookmark
