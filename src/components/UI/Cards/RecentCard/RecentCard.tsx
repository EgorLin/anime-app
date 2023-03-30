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
  lastEpisode: string;
}

function RecentCard({
  title,
  id,
  image,
  genres,
  lastEpisode,
}: IProps): ReactElement {
  const dateWindow = <YearWindow>{lastEpisode}</YearWindow>;
  const navigate = useNavigate();
  function openAnime(): void {
    navigate("/anititle/" + id);
  }

  return (
    <EmptyCard
      imageSize={CardSizes.AUTO}
      hasBookmark
      hasPlayButton
      title={title}
      image={image}
      list={genres}
      onClick={openAnime}
      rightCornerContent={dateWindow}
    />
  );
}

export default RecentCard;
