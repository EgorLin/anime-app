import { ReactElement } from "react";
import RecommendationCardItem from "./RecommendationCardItem";

interface IProps {
  id: string;
  title: string;
  type: string;
  image: string;
  rating: number;
  className?: string;
}

function RecommendationCard(props: IProps): ReactElement {
  return <RecommendationCardItem {...props} />;
}

export default RecommendationCard;
