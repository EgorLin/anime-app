import { ReactElement, ReactNode } from "react";
import styles from "./YearWindow.module.scss";

interface IProps {
  children: ReactNode;
}

function YearWindow({ children }: IProps): ReactElement {
  return <div className={styles.year}>{children}</div>;
}

export default YearWindow;
