import { ReactElement } from "react";
import Catalog from "../../components/Catalog/Catalog";
import SearchSettings from "../../components/SearchSettings/SearchSettings";
import RecentCard from "../../components/UI/Cards/RecentCard/RecentCard";
import { RequestStatuses } from "../../const/requestStatuses";
import { IAnimeSearch } from "../../types/IAnimeSearch";

interface IProps {
  status: string;
  error: string;
  data: IAnimeSearch;
}

function SearchItem({ status, error, data }: IProps): ReactElement {
  return (
    <div>
      <SearchSettings />
      {status === RequestStatuses.SUCCEEDED && (
        <Catalog
          elements={data.results.map((element) => (
            <RecentCard
              key={element.id}
              title={element.title}
              id={element.id}
              image={element.image}
              genres={element.genres}
              lastEpisode={element.currentEpisode + ""}
            />
          ))}
        />
      )}
    </div>
  );
}

export default SearchItem;
