import { ReactElement } from "react";
import { IAnimeInfo } from "../../pages/AnimePage/AnimePage";
import DetailsItem from "./DetailsItem";

interface IProps {
  animeInfo: IAnimeInfo | null;
}

function Details({ animeInfo }: IProps): ReactElement {
  return <DetailsItem animeInfo={animeInfo} />;
}

export default Details;
