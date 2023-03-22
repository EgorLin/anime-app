import { ReactElement, ReactNode } from "react";
import styles from "./SliderPanel.module.scss";

interface IProps {
  title?: string;
  elements: ReactNode[] | undefined;
}

function SliderPanelItem({ title, elements }: IProps): ReactElement {
  console.log("slider panel " + title + " rerender", elements);
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      {title ? <h2>{title}</h2> : null}
      <div className={styles.slider}>
        {elements
          ? elements.map((element, index) => (
            <div key={index} className={styles.card}>
              {element}
            </div>
          ))
          : null}
      </div>
    </div>
  );
}

export default SliderPanelItem;
