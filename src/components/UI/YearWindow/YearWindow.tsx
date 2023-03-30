import { ReactElement, ReactNode } from "react";
import styles from "./YearWindow.module.scss";

interface IProps {
  children: ReactNode;
  roundedCorners?: boolean;
}

function YearWindow({ children, roundedCorners }: IProps): ReactElement {
  return (
    <div
      className={[
        styles.year,
        roundedCorners ? styles.roundedCorners : null,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default YearWindow;
