import { ReactElement, useEffect } from "react";
import { proxyUrl } from "../../const/corsProxy";
import { RequestStatuses } from "../../const/requestStatuses";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchStreamInfo } from "../../store/reducers/StreamInfoSlice";
import Spinner from "../UI/Spinner/Spinner";
import ArtPlayerItem from "./ArtPlayerItem";

interface IProps {
  className?: string;
  spinnerContainerSize?: string;
  animeId: string;
  poster: string;
}

function ArtPlayer({
  animeId,
  className,
  poster,
  spinnerContainerSize,
}: IProps): ReactElement {
  const dispatch = useAppDispatch();

  const { data, status, error } = useAppSelector((store) => store.streamInfo);

  useEffect(() => {
    dispatch(fetchStreamInfo(animeId));
  }, [animeId]);

  let content;
  switch (status) {
    case RequestStatuses.IDLE:
      content = <></>;
      break;
    case RequestStatuses.LOADING:
      content = <Spinner containerSize={spinnerContainerSize} />;
      break;
    case RequestStatuses.SUCCEEDED:
      content = (
        <ArtPlayerItem
          option={{
            url: proxyUrl + data.sources[3].url,
            container: ".artplayer-container",
            poster: proxyUrl + poster,
            quality: data.sources
              .filter((source) => source.quality.match(/\d[p]/))
              .map((source) => {
                return {
                  html: source.quality,
                  url: proxyUrl + source.url,
                };
              }),
          }}
          getInstance={() => { }}
          className={className}
        />
      );
      break;
    case RequestStatuses.FAILED:
      content = <div>{error}</div>;
      break;
  }

  return <>{content}</>;
}

export default ArtPlayer;
