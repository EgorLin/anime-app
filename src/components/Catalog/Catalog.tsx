import { ReactElement } from "react";
import CatalogItem from "./CatalogItem";

interface IProps {
  className?: string;
  title?: string;
  elements: ReactElement[];
}

function Catalog(props: IProps): ReactElement {
  return <CatalogItem {...props} />;
}

export default Catalog;
