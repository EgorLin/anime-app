import { ReactElement } from "react";
import useNavigateAnime from "../../../../hooks/useNavigateAnime";
import { ILanguageTitles } from "../../../../types/ILanguageTitles";
import EmptyCard, { CardSizes } from "../EmptyCard/EmptyCard";

interface IProps {
  title: ILanguageTitles;
  id: number;
  image: string;
  type: string;
  relationType: string;
}

function RelationCard({
  title,
  id,
  image,
  type,
  relationType,
}: IProps): ReactElement {
  const openAnime = useNavigateAnime(id);
  const list = [type, relationType];
  // if (type) {
  //   list.push(type);
  // }
  // if (relationType) {
  //   list.push(relationType);
  // }

  return (
    <EmptyCard
      animeId={id + ""}
      imageSize={CardSizes.SMALL}
      hasBookmark
      hasPlayButton
      title={title}
      image={image}
      list={list}
      onClick={openAnime}
    />
  );
}

export default RelationCard;
