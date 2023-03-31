import { ReactElement, useEffect, useRef, useState } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
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
  console.log(status);
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
