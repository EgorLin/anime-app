import { ReactElement } from "react";
import styles from "./Spinner.module.scss";

interface IProps {
  containerSize?: string;
}

function Spinner({ containerSize }: IProps): ReactElement {
  return (
    <div className={[styles.container, containerSize].join(" ")}>
      <svg className={styles.svg} viewBox="0 0 38 38">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="1.4">
            <path className={styles.bigPath} d="M36 18c0-9.94-8.06-18-18-18" />
            <path
              className={styles.middlePath}
              d="M30 18c0-9.94-8.06-12-12-12"
            />
            <path
              className={styles.smallPath}
              d="M24 18c0-7.94-8.06-06-06-06"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Spinner;
