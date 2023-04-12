import { IAnimeRecommendation } from "../../../types/IAnimeRecommendation";
import RecommendationCard from "../../UI/Cards/RecommendationCard/RecommendationCard";
import EmptySliderPanel from "../EmptySliderPanel/EmptySliderPanel";

interface IProps {
  recommendations: IAnimeRecommendation[];
}

function RecommendationSliderPanel({ recommendations }: IProps) {
  return (
    <EmptySliderPanel
      title="Recommendations"
      elements={recommendations.map((recommendation) => (
        <RecommendationCard
          id={recommendation.id}
          title={recommendation.title}
          type={recommendation.type}
          image={recommendation.image}
          rating={recommendation.rating}
        />
      ))}
    />
  );
}

export default RecommendationSliderPanel;
