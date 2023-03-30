import { ReactElement } from "react";
import { ILanguageTitles } from "../../../../types/ILanguageTitles";
import EpisodeBox from "../../EpisodeBox/EpisodeBox";
import EmptyCard, { CardSizes } from "../EmptyCard/EmptyCard";

interface IProps {
  title: string;
  id: string;
  image: string;
  number: number;
  applyNewEpisode: (id: string) => void;
}

function EpisodeCard({
  title,
  id,
  image,
  number,
  applyNewEpisode,
}: IProps): ReactElement {
  const episodeWindow = <EpisodeBox>{number}</EpisodeBox>;
  const englishTitle: ILanguageTitles = {
    english: title,
    romaji: "",
    native: "",
  };

  function applyEpisode() {
    applyNewEpisode(id);
  }

  return (
    <EmptyCard
      imageSize={CardSizes.WIDE}
      hasPlayButton
      visibleRightCorner
      title={englishTitle}
      image={image}
      rightCornerContent={episodeWindow}
      onClick={applyEpisode}
    />
  );
}

export default EpisodeCard;
