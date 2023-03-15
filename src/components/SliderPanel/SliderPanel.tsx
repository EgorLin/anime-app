import { ReactElement, ReactNode } from "react";
import SliderPanelItem from "./SliderPanelItem";

interface IProps {
  title?: string;
  elements: ReactNode[] | undefined;
}

function SliderPanel({ title, elements }: IProps): ReactElement {
  return <SliderPanelItem title={title} elements={elements} />;
}

export default SliderPanel;
