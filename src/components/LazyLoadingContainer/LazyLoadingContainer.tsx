import { ReactElement, useEffect, useRef, useState } from "react";
import styles from "./LazyLoadingContainer.module.scss";

interface IProps {
  children: ReactElement;
}

function LazyLoadingContainer({ children }: IProps): ReactElement {
  const [isIntersected, setIsIntersected] = useState(false);
  const trigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersected(true);
      }
    }, options);
    if (trigger.current) {
      observer.observe(trigger.current);
    }
  }, []);

  return isIntersected ? (
    children
  ) : (
    <div ref={trigger} className={styles.trigger}></div>
  );
}

export default LazyLoadingContainer;
