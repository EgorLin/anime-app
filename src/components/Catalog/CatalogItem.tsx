import { ReactElement, ReactNode } from "react";
import VideoCard from "../UI/VideoCard/VideoCard";
import styles from "./Catalog.module.scss";

interface IProps {
  title?: string;
  className?: string;
  elements: ReactElement[];
}

function CatalogItem({ title, className, elements }: IProps): ReactElement {
  return (
    <div className={[styles.container, className, "wrapperM"].join(" ")}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.catalog}>{elements}</div>
    </div>
  );
}

export default CatalogItem;
