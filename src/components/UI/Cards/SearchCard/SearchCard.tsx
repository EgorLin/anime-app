import { ReactElement } from "react";
import useNavigateAnime from "../../../../hooks/useNavigateAnime";
import { ILanguageTitles } from "../../../../types/ILanguageTitles";
import EpisodeBox from "../../EpisodeBox/EpisodeBox";
import EmptyCard, { CardSizes } from "../EmptyCard/EmptyCard";

interface IProps {
  title: ILanguageTitles;
  id: string;
  image: string;
  genres: string[];
  lastEpisode: string;
}

function SearchCard({
  title,
  id,
  image,
  genres,
  lastEpisode,
}: IProps): ReactElement {
  const episodeWindow = lastEpisode ? (
    <EpisodeBox>{lastEpisode}</EpisodeBox>
  ) : null;
  const openAnime = useNavigateAnime(id);

  return (
    <EmptyCard
      animeId={id}
      imageSize={CardSizes.AUTO}
      hasBookmark
      hasPlayButton
      title={title}
      image={image}
      list={genres}
      onClick={openAnime}
      rightCornerContent={episodeWindow}
    />
  );
}

export default SearchCard;
