import { ReactElement, ReactNode } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import Spinner from "../../UI/Spinner/Spinner";
import styles from "./EmptySliderPanel.module.scss";

interface IProps {
  title?: string;
  status: string;
  error: string;
  elements: ReactNode[];
}

function EmptySliderPanelItem({
  title,
  elements,
  status,
  error,
}: IProps): ReactElement {
  let content;
  switch (status) {
    case RequestStatuses.IDLE:
      content = <></>;
      break;
    case RequestStatuses.LOADING:
      content = <Spinner />;
      break;
    case RequestStatuses.SUCCEEDED:
      content = (
        <div className={styles.slider}>
          {elements
            ? elements.map((element, index) => (
              <div key={index} className={styles.card}>
                {element}
              </div>
            ))
            : null}
        </div>
      );
      break;
    case RequestStatuses.FAILED:
      content = { error };
      break;
  }

  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <>
        {title ? <h2>{title}</h2> : null}
        {content}
      </>
    </div>
  );
}

export default EmptySliderPanelItem;
