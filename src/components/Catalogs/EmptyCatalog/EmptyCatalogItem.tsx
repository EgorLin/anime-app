import { ReactElement, RefObject } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import Spinner from "../../UI/Spinner/Spinner";
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
    case RequestStatuses.LOADING:
      content = <Spinner containerSize={styles.spinnerHeight} />;
      break;
    case RequestStatuses.SUCCEEDED:
      content = <Trigger target={target} />;
      break;
    case RequestStatuses.FAILED:
      content = <div>{error}</div>;
      break;
  }

  return (
    <div className={[styles.container, className, "wrapperM"].join(" ")}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.catalog}>{elements}</div>
      {content}
    </div>
  );
}

export default EmptyCatalogItem;
