import { ReactElement } from "react";
import VideoCardItem from "./VideoCardItem";

interface IProps {
  id?: string;
  title?: string;
  image?: string;
  lastEpisode?: string;
  genres?: string[];
  className?: string;
}

function VideoCard(props: IProps): ReactElement {
  return <VideoCardItem {...props} />;
}

export default VideoCard;
