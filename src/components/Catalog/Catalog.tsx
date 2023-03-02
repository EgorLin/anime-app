import { ReactElement } from 'react'
import CatalogItem from './CatalogItem'

interface IProps {
  className?: string
}

function Catalog({ className }: IProps): ReactElement {
  return <CatalogItem className={className} />
}

export default Catalog
