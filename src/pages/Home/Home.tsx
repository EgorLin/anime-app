import Catalog from "../../components/Catalog/Catalog";
import SliderPanel from "../../components/SliderPanel/SliderPanel";
import ImageCard from "../../components/UI/ImageCard/ImageCard";
import VideoCard from "../../components/UI/VideoCard/VideoCard";

function Home() {
  return (
    <>
      <SliderPanel
        elements={[
          <ImageCard id="card-1" />,
          <ImageCard id="card-1" />,
          <ImageCard id="card-1" />,
          <ImageCard id="card-1" />,
          <ImageCard id="card-1" />,
          <ImageCard id="card-1" />,
        ]}
      />
      <Catalog
        title="Recent releases"
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
          <VideoCard />,
          <VideoCard />,
          <VideoCard />,
        ]}
      />
    </>
  );
}

export default Home;
