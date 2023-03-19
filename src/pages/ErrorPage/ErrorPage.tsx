import { ReactElement } from "react";
import ButtonIcon from "../../components/UI/ButtonIcon/ButtonIcon";
import styles from "./ErrorPage.module.scss";
import { RouteNames } from "../../router";
import { Link } from "react-router-dom";

function ErrorPage(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <h1>
          Ups. Error <span className={styles.error404}>404</span>
        </h1>
        <Link to={RouteNames.HOME} className={styles.button}>
          Get back
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
