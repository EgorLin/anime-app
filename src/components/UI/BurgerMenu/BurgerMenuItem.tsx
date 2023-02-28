import { ReactElement } from 'react'
import ButtonIcon from '../ButtonIcon/ButtonIcon'
import styles from './BurgerMenu.module.scss'

interface IProps {
  isOpened: boolean
  handleClick: () => void
  className?: string
}

function BurgerMenuItem({
  isOpened,
  handleClick,
  className,
}: IProps): ReactElement {
  return (
    <ButtonIcon
      className={className}
      onClick={handleClick}
    >
      {isOpened ? (
        <svg className={styles.menu} viewBox='0 0 24 24'>
          <path
            d='M19 5L4.99998 19M5.00001 5L19 19'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ) : (
        <svg className={styles.menu} viewBox='0 0 24 24'>
          <path
            d='M3 4H21'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 12H21'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 20H21'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </ButtonIcon>
  )
}

export default BurgerMenuItem
