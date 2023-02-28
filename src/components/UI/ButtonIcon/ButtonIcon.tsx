import { ReactElement, ReactNode } from 'react'
import styles from './ButtonIcon.module.scss'

interface IProps {
  className?: string
  children?: ReactNode
  onClick?: () => void
}

function ButtonIcon({ className, children, onClick }: IProps): ReactElement {
  return (
    <button type='button' className={[styles.button, className].join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonIcon
