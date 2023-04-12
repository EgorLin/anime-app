import { ReactElement, ReactNode } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import EmptySliderPanelItem from "./EmptySliderPanelItem";

interface IProps {
  title?: string;
  status?: string;
  error?: string;
  elements: ReactNode[];
}

function EmptySliderPanel({
  title,
  elements,
  status = RequestStatuses.SUCCEEDED,
  error = "Slider panel error",
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
