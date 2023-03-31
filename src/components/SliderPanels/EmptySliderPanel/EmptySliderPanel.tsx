import { ReactElement, ReactNode } from "react";
import EmptySliderPanelItem from "./EmptySliderPanelItem";

interface IProps {
  title?: string;
  status: string;
  error: string;
  elements: ReactNode[];
}

function EmptySliderPanel({
  title,
  elements,
  status,
  error,
}: IProps): ReactElement {
  return (
    <EmptySliderPanelItem
      title={title}
      elements={elements}
      status={status}
      error={error}
    />
  );
}

export default EmptySliderPanel;
