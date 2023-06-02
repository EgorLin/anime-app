import { ReactElement, ReactNode, RefObject } from "react";
import LeftArrowIcon from "../../../assets/icons/LeftArrowIcon/LeftArrowIcon";
import RightArrowIcon from "../../../assets/icons/RightArrowIcon/RightArrowIcon";
import { RequestStatuses } from "../../../const/requestStatuses";
import Spinner from "../../UI/Spinner/Spinner";
import Trigger from "../../UI/Trigger/Trigger";
import styles from "./EmptySliderPanel.module.scss";

interface IProps {
  title?: string;
  status: string;
  error: string;
  buttonsVisibility: {
    left: boolean;
    right: boolean;
  };
  divElements: ReactNode[];
  target: RefObject<HTMLDivElement>;
  isIntersected: boolean;
  slideForward: () => void;
  slideBackward: () => void;
}

function EmptySliderPanelItem({
  title,
  divElements,
  status,
  error,
  buttonsVisibility,
  target,
  isIntersected,
  slideForward,
  slideBackward,
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
        <>
          <div className={styles.slider}>{divElements}</div>
          {buttonsVisibility.left && (
            <span onClick={slideBackward} className={styles.button}>
              <LeftArrowIcon />
            </span>
          )}
          {buttonsVisibility.right && (
            <span
              onClick={slideForward}
              className={[styles.button, styles.right].join(" ")}
            >
              <RightArrowIcon />
            </span>
          )}
          {!isIntersected && <Trigger target={target} />}
        </>
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
