import { Dispatch, ReactElement, SetStateAction } from "react";
import { IAnimeEpisode } from "../../types/IAnimeEpisode";
import ArtPlayer from "../ArtPlayer/ArtPlayer";
import LazyLoadingContainer from "../LazyLoadingContainer/LazyLoadingContainer";
// import SliderPanel from "../SliderPanel/SliderPanel";
import EpisodeCard from "../UI/Cards/EpisodeCard/EpisodeCard";
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

      {/* <LazyLoadingContainer> */}
      {/*   <SliderPanel */}
      {/*     title="Episodes" */}
      {/*     elements={episodes.map((episode) => ( */}
      {/*       <EpisodeCard */}
      {/*         id={episode.id} */}
      {/*         title={episode.title} */}
      {/*         number={episode.number} */}
      {/*         image={episode.image} */}
      {/*         applyNewEpisode={applyNewEpisode} */}
      {/*       /> */}
      {/*     ))} */}
      {/*   /> */}
      {/* </LazyLoadingContainer> */}
    </>
  );
}

export default EpisodeSectionItem;
