import { ReactElement, useState } from "react";
import { useObserver } from "../../hooks/useObserver";
import styles from "./LazyLoadingContainer.module.scss";

interface IProps {
  children: ReactElement;
}

function LazyLoadingContainer({ children }: IProps): ReactElement {
  const [isIntersected, setIsIntersected] = useState(false);

  const trigger = useObserver(() => {
    setIsIntersected(true);
  });
  return isIntersected ? (
    children
  ) : (
    <div ref={trigger} className={styles.trigger}></div>
  );
}

export default LazyLoadingContainer;
