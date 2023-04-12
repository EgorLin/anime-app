import { ReactElement } from "react";
import { IAnimeEpisode } from "../../types/IAnimeEpisode";
import ArtPlayer from "../ArtPlayer/ArtPlayer";
import LazyLoadingContainer from "../LazyLoadingContainer/LazyLoadingContainer";
import EpisodeSliderPanel from "../SliderPanels/EpisodeSliderPanel/EpisodeSliderPanel";
import styles from "./EpisodeSection.module.scss";

interface IProps {
  episodes: IAnimeEpisode[];
  currentEpisode: IAnimeEpisode;
  applyNewEpisode: (id: string) => void;
}

function EpisodeSectionItem({
  episodes,
  currentEpisode,
  applyNewEpisode,
}: IProps): ReactElement {
  return (
    <>
      <ArtPlayer
        animeId={currentEpisode.id}
        poster={currentEpisode.image}
        className={[styles.player, "wrapperM"].join(" ")}
        spinnerContainerSize={styles.spinnerPlayerSize}
      />

      <LazyLoadingContainer>
        <EpisodeSliderPanel
          episodes={episodes}
          current={currentEpisode.id}
          applyNewEpisode={applyNewEpisode}
        />
      </LazyLoadingContainer>
    </>
  );
}

export default EpisodeSectionItem;
