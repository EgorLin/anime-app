import { ReactElement, useState } from "react";
import { IAnimeEpisode } from "../../types/IAnimeEpisode";
import EpisodeSectionItem from "./EpisodeSectionItem";

interface IProps {
  episodes: IAnimeEpisode[];
}

function EpisodeSection({ episodes }: IProps): ReactElement {
  const [currentEpisode, setCurrentEpisode] = useState<IAnimeEpisode>(
    episodes[0]
  );

  function applyNewEpisode(id: string): void {
    const newEp = episodes.find((episode) => episode.id === id);
    if (newEp) {
      setCurrentEpisode(newEp);
    }
  }

  return (
    <EpisodeSectionItem
      episodes={episodes}
      currentEpisode={currentEpisode}
      applyNewEpisode={applyNewEpisode}
    />
  );
}

export default EpisodeSection;
