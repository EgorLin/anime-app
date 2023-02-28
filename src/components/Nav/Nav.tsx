import { ReactElement } from 'react'
import NavItem from './NavItem'

interface IProps {
  className?: string
}

function Nav({ className }: IProps): ReactElement {
  return (
      <NavItem className={className} />
  )
}

export default Nav
