import { ReactElement, useState } from "react";
import { useObserver } from "../../hooks/useObserver";
import Trigger from "../UI/Trigger/Trigger";

interface IProps {
  children: ReactElement;
}

function LazyLoadingContainer({ children }: IProps): ReactElement {
  const [isIntersected, setIsIntersected] = useState(false);

  const target = useObserver(() => {
    setIsIntersected(true);
  });

  return isIntersected ? children : <Trigger target={target} />;
}

export default LazyLoadingContainer;
