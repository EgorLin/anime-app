import { ReactElement } from "react";
import Catalog from "../../components/Catalog/Catalog";
import RecentReleasesCatalog from "../../components/Catalogs/RecentReleasesCatalog/RecentReleasesCatalog";
import SearchSettings from "../../components/SearchSettings/SearchSettings";
import VideoCard from "../../components/UI/VideoCard/VideoCard";

function SearchItem(): ReactElement {
  return (
    <div>
      <SearchSettings />
      <RecentReleasesCatalog />
      <Catalog
        elements={[
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
        ]}
      />
    </div>
  );
}

export default SearchItem;
