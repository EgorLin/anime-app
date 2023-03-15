import { ReactElement } from "react";
import EpisodeCardItem from "./EpisodeCardItem";

interface IProps {
  id: string;
  title: string;
  number: number;
  image: string;
  className?: string;
}

function EpisodeCard(props: IProps): ReactElement {
  return <EpisodeCardItem {...props} />;
}

export default EpisodeCard;
