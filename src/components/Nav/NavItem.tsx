import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../router";
import styles from "./Nav.module.scss";

interface IProps {
  className?: string;
}

function NavItem({ className }: IProps): ReactElement {
  return (
    <nav className={className}>
      <ul className={styles.nav}>
        <li>
          <Link to={RouteNames.HOME}>Home</Link>
        </li>
        <li>
          <Link to={RouteNames.SEARCH}>Search</Link>
        </li>
        <li>
          <Link to={RouteNames.HOME}>About project</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavItem;
