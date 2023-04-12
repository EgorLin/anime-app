import { ReactElement } from "react";
import StarIcon from "../../../../assets/icons/StarIcon/StarIcon";
import useNavigateAnime from "../../../../hooks/useNavigateAnime";
import { ILanguageTitles } from "../../../../types/ILanguageTitles";
import YearWindow from "../../YearWindow/YearWindow";
import EmptyCard, { CardSizes } from "../EmptyCard/EmptyCard";

interface IProps {
  title: ILanguageTitles;
  id: number;
  image: string;
  type: string;
  rating: number;
}

function RecommendationCard({
  title,
  id,
  image,
  type,
  rating,
}: IProps): ReactElement {
  const openAnime = useNavigateAnime(id);
  const ratingWindow = (
    <YearWindow roundedCorners>
      <StarIcon /> {rating}
    </YearWindow>
  );
  const list = [];
  if (type) {
    list.push(type);
  }

  return (
    <EmptyCard
      imageSize={CardSizes.SMALL}
      hasBookmark
      hasPlayButton
      title={title}
      image={image}
      list={list}
      rightCornerContent={ratingWindow}
      onClick={openAnime}
    />
  );
}

export default RecommendationCard;
