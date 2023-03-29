import { ReactElement } from "react";
import ImageCardItem from "./ImageCardItem";

interface IProps {
  id: string;
  title: string;
  image: string;
  genres: string[];
  data: number;
  className?: string;
}

function ImageCard(props: IProps): ReactElement {
  const cuttedGenres =
    props.genres.length >= 3 ? props.genres.slice(0, 3) : props.genres;
  return <ImageCardItem {...props} genres={cuttedGenres} />;
}

export default ImageCard;
