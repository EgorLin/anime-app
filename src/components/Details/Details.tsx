import { ReactElement } from "react";
import { IAnimeInfo } from "../../types/IAnimeInfo";
import DetailsItem from "./DetailsItem";

interface IProps {
  animeInfo: IAnimeInfo | null;
}

function Details({ animeInfo }: IProps): ReactElement {
  return <DetailsItem animeInfo={animeInfo} />;
}

export default Details;
