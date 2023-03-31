import { ReactElement } from "react";
import RecentReleasesCatalog from "../../components/Catalogs/RecentReleasesCatalog/RecentReleasesCatalog";
import TrendingSliderPanel from "../../components/SliderPanels/TrendingSliderPanel/TrendingSliderPanel";

function HomeItem(): ReactElement {
  return (
    <div>
      <TrendingSliderPanel />
      <RecentReleasesCatalog />
    </div>
  );
}

export default HomeItem;
