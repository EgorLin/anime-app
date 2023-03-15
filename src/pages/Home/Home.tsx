import Catalog from "../../components/Catalog/Catalog";
import SliderPanel from "../../components/SliderPanel/SliderPanel";
import ImageCard from "../../components/UI/ImageCard/ImageCard";

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
      <Catalog />
    </>
  );
}

export default Home;
