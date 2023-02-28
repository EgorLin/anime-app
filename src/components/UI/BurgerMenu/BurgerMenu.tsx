import { ReactElement } from 'react'
import BurgerMenuItem from './BurgerMenuItem'

interface IProps {
  isOpened: boolean
  setIsOpened: (isOpened: boolean) => void
  className?: string
}

function BurgerMenu({
  isOpened,
  setIsOpened,
  className,
}: IProps): ReactElement {
  function handleClick() {
    setIsOpened(!isOpened)
  }

  return (
    <BurgerMenuItem
      isOpened={isOpened}
      handleClick={handleClick}
      className={className}
    />
  )
}

export default BurgerMenu
