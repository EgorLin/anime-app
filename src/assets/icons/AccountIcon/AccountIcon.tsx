import { ReactElement } from "react";
import styles from "./AccountIcon.module.scss";

function AccountIcon(): ReactElement {
  return (
    <svg className={styles.svg} viewBox="0 0 24 24">
      <circle className={styles.stroke} cx="12" cy="7.25" r="5.73" />
      <path
        className={styles.stroke}
        d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
      />
    </svg>
  );
}

export default AccountIcon;
