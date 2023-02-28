import { ReactElement, useState } from 'react'
import { breakpoints } from '../../const/breakpoints'
import { useWindowSize } from '../../hooks/useWidnowSize'
import HeaderItem from './HeaderItem'

function Header(): ReactElement {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const isWideScreen = useWindowSize(breakpoints.mobile)

  return (
    <HeaderItem
      isWideScreen={isWideScreen}
      isMenuOpened={isMenuOpened}
      setIsMenuOpened={setIsMenuOpened}
    />
  )
}

export default Header
