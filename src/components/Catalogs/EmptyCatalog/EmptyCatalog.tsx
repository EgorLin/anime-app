import { ReactElement } from "react";
import { useObserver } from "../../../hooks/useObserver";
import EmptyCatalogItem from "./EmptyCatalogItem";

interface IProps {
  className?: string;
  title?: string;
  status: string;
  error: string;
  elements: ReactElement[];
  handleTrigger: () => void;
}

function EmptyCatalog({
  title,
  elements,
  className,
  status,
  error,
  handleTrigger,
}: IProps): ReactElement {
  const target = useObserver(() => {
    handleTrigger();
  }, status);

  return (
    <EmptyCatalogItem
      title={title}
      elements={elements}
      className={className}
      status={status}
      error={error}
      target={target}
    />
  );
}

export default EmptyCatalog;
