import { ReactElement, RefObject } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import Trigger from "../../UI/Trigger/Trigger";
import styles from "./EmptyCatalog.module.scss";

interface IProps {
  title?: string;
  className?: string;
  elements: ReactElement[];
  status: string;
  error: string;
  target: RefObject<HTMLDivElement>;
}

function EmptyCatalogItem({
  title,
  className,
  elements,
  status,
  error,
  target,
}: IProps): ReactElement {
  let content;
  switch (status) {
    case RequestStatuses.IDLE:
      content = <></>;
      break;
    case RequestStatuses.SUCCEEDED:
      content = (
        <div className={[styles.container, className, "wrapperM"].join(" ")}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.catalog}>{elements}</div>
          <Trigger target={target} />
        </div>
      );
      break;
    case RequestStatuses.FAILED:
      content = <div>{error}</div>;
      break;
  }

  return <>{content}</>;
}

export default EmptyCatalogItem;
