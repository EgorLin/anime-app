import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { ILanguageTitles } from "../../../../types/ILanguageTitles";
import YearWindow from "../../YearWindow/YearWindow";
import EmptyCard, { CardSizes } from "../EmptyCard/EmptyCard";

interface IProps {
  title: ILanguageTitles;
  id: string;
  image: string;
  genres: string[];
  date: number;
}

function TrendingCard({
  title,
  id,
  image,
  genres,
  date,
}: IProps): ReactElement {
  const dateWindow = <YearWindow>{date}</YearWindow>;
  const navigate = useNavigate();
  function openAnime(): void {
    navigate("/anititle/" + id);
  }

  return (
    <EmptyCard
      imageSize={CardSizes.WIDE}
      isMainContentIn
      hasBookmark
      title={title}
      image={image}
      list={genres}
      onClick={openAnime}
      rightCornerContent={dateWindow}
    />
  );
}

export default TrendingCard;
