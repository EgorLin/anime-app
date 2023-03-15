import { ReactElement } from "react";
import EpisodeBoxItem from "./EpisodeBoxItem";

interface IProps {
  className?: string;
  children?: any | undefined;
}

function EpisodeBox(props: IProps): ReactElement {
  return <EpisodeBoxItem {...props} />;
}

export default EpisodeBox;
