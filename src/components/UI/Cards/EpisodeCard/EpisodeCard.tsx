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
  isActive: boolean;
}

function EpisodeCard({
  title,
  id,
  image,
  number,
  applyNewEpisode,
  isActive,
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
      isMainContentIn
      visibleRightCorner
      title={englishTitle}
      image={image}
      rightCornerContent={episodeWindow}
      onClick={applyEpisode}
      hasGlowing={isActive}
    />
  );
}

export default EpisodeCard;
