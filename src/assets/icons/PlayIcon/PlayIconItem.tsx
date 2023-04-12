import { ReactElement } from 'react'
import styles from './PlayIcon.module.scss'

interface IProps {
  className?: string
}

function PlayIconItem({ className }: IProps): ReactElement {
  return (
    <svg className={[styles.svg, className].join(' ')} viewBox='0 0 32 32'>
      <path d='M7.47 6.661l16.010 9.339-16.010 9.339v-18.678zM6.404 4.804v22.391l19.192-11.196-19.192-11.196z'></path>
    </svg>
  )
}

export default PlayIconItem
