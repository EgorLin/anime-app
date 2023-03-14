import { ReactElement } from "react";
import Details from "../../components/Details/Details";
import { IAnimeInfo } from "./AnimePage";
import styles from "./AnimePage.module.scss";

interface IProps {
  animeInfo: IAnimeInfo | null;
}

function AnimePageItem({ animeInfo }: IProps): ReactElement {
  return (
    <div>
      <Details animeInfo={animeInfo} />
    </div>
  );
}

export default AnimePageItem;
