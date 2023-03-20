import { ReactElement } from "react";
import Catalog from "../../components/Catalog/Catalog";
import SearchSettings from "../../components/SearchSettings/SearchSettings";
import VideoCard from "../../components/UI/VideoCard/VideoCard";

function SearchItem(): ReactElement {
  return (
    <div>
      <SearchSettings />
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
