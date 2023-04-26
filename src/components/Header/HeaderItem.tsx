import { ReactElement } from "react";
import ControlPanel from "../ControlPanel/ControlPanel";
import Nav from "../Nav/Nav";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import Logo from "../UI/Logo/Logo";
import SearchInput from "../UI/SearchInput/SearchInput";
import styles from "./Header.module.scss";

interface IProps {
  isWideScreen: boolean;
  isMenuOpened: boolean;
  setIsMenuOpened: (isOpen: boolean) => void;
}

function HeaderItem({
  isWideScreen,
  isMenuOpened,
  setIsMenuOpened,
}: IProps): ReactElement {
  return (
    <>
      {isWideScreen ? (
        <header className={[styles.header, styles.menu, "wrapper"].join(" ")}>
          <div className={styles.leftHeaderContainer}>
            <Logo />
            <Nav className={[styles.nav].join(" ")} />
          </div>
          <div className={styles.rightHeaderContainer}>
            <SearchInput className={styles.search} />
            <ControlPanel />
          </div>
        </header>
      ) : (
        <header
          className={[
            styles.header,
            isMenuOpened ? styles.opened : styles.closed,
          ].join(" ")}
        >
          <Nav className={["wrapper", styles.nav].join(" ")} />
          <div className={[styles.menu, "wrapper"].join(" ")}>
            <div className={styles.leftContainer}>
              <BurgerMenu
                isOpened={isMenuOpened}
                setIsOpened={setIsMenuOpened}
                className={styles.burgerBtn}
              />
              <Logo />
            </div>
            <SearchInput />
            <ControlPanel />
          </div>
        </header>
      )}
    </>
  );
}

export default HeaderItem;
