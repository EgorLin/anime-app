import { breakpoints } from '../../const/breakpoints'
import { useWindowSize } from '../../hooks/useWidnowSize'
import HeaderItem from './HeaderItem'

function Header() {
  const isWideScreen = useWindowSize(breakpoints.mobile)

  return <HeaderItem isWideScreen={isWideScreen} />
}

export default Header
