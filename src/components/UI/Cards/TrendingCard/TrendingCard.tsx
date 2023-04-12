import { ReactElement } from "react";
import useNavigateAnime from "../../../../hooks/useNavigateAnime";
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
  const dateWindow = date ? <YearWindow>{date}</YearWindow> : null;
  const openAnime = useNavigateAnime(id);

  return (
    <EmptyCard
      animeId={id}
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
