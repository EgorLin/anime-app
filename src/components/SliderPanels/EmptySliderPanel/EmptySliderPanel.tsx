import { ReactElement, ReactNode } from "react";
import EmptySliderPanelItem from "./EmptySliderPanelItem";

interface IProps {
  title?: string;
  elements: ReactNode[] | undefined;
}

function EmptySliderPanel({ title, elements }: IProps): ReactElement {
  return <EmptySliderPanelItem title={title} elements={elements} />;
}

export default EmptySliderPanel;
