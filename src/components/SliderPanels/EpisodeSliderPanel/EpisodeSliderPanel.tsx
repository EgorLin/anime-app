import { IAnimeEpisode } from "../../../types/IAnimeEpisode";
import EpisodeCard from "../../UI/Cards/EpisodeCard/EpisodeCard";
import EmptySliderPanel from "../EmptySliderPanel/EmptySliderPanel";

interface IProps {
  current: string;
  episodes: IAnimeEpisode[];
  applyNewEpisode: (id: string) => void;
}

function EpisodeSliderPanel({ episodes, current, applyNewEpisode }: IProps) {
  return (
    <EmptySliderPanel
      elements={episodes.map((episode) => (
        <EpisodeCard
          id={episode.id}
          title={episode.title}
          number={episode.number}
          image={episode.image}
          applyNewEpisode={applyNewEpisode}
          isActive={current === episode.id}
        />
      ))}
    />
  );
}

export default EpisodeSliderPanel;
