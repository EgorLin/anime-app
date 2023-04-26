import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import PlayIcon from "../../assets/icons/PlayIcon/PlayIcon";
import StarIcon from "../../assets/icons/StarIcon/StarIcon";
import { IAnimeInfo } from "../../types/IAnimeInfo";
import styles from "./Details.module.scss";

interface IProps {
  animeInfo: IAnimeInfo;
}

function DetailsItem({ animeInfo }: IProps): ReactElement {
  return (
    <div className={styles.container}>
      <img src={animeInfo.cover} alt="" />
      <div className={[styles.content, "wrapperM"].join(" ")}>
        {animeInfo.trailer && (
          <div>
            <NavLink
              to={
                "https://www." +
                animeInfo?.trailer.site +
                ".com/watch?v=" +
                animeInfo?.trailer.id
              }
              target="_blank"
              className={styles.trailerContainer}
            >
              <PlayIcon className={styles.trailerIcon} /> <span>Trailer</span>
            </NavLink>
          </div>
        )}
        <h1>{animeInfo?.title.english}</h1>
        <div className={styles.shortDetails}>
          {animeInfo.rating && (
            <>
              <span className={styles.rating}>
                <StarIcon /> {animeInfo?.rating}
              </span>
              <span className={styles.separator}>|</span>{" "}
            </>
          )}
          {animeInfo.genres.length > 0 && (
            <>
              <span>{animeInfo?.genres[0]}</span>
              <span className={styles.separator}>|</span>{" "}
            </>
          )}
          {animeInfo.releaseDate && (
            <>
              <span>{animeInfo?.releaseDate}</span>
              <span className={styles.separator}>|</span>
            </>
          )}
          {animeInfo.status && (
            <>
              <span>{animeInfo?.status}</span>
              <span className={styles.separator}>|</span>
            </>
          )}
          {animeInfo.currentEpisode && animeInfo.totalEpisodes && (
            <span>
              {animeInfo?.currentEpisode + "/" + animeInfo?.totalEpisodes}
            </span>
          )}
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: animeInfo?.description ? animeInfo?.description : "",
          }}
        ></div>
      </div>
    </div>
  );
}

export default DetailsItem;
