import { useEffect, useRef } from "react";
import Artplayer from "artplayer";
import Hls from "hls.js";
import Option from "artplayer/types/option";

interface IProps {
  getInstance: (art: Artplayer) => any;
  className?: string;
  option: Option;
}

function ArtPlayerItem({ option, getInstance, ...rest }: IProps) {
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current ? artRef.current : "",
      theme: "#2f80ed",
      type: "m3u8",
      setting: true,
      playbackRate: true,
      fullscreen: true,
      customType: {
        m3u8: playM3u8,
      },
    });

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, []);

  return <div ref={artRef} {...rest}></div>;
}

function playM3u8(video: HTMLMediaElement, url: string, art: Artplayer) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);

    // optional
    //art.hls = hls
    art.once("url", () => hls.destroy());
    art.once("destroy", () => hls.destroy());
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = url;
  } else {
    art.notice.show = "Unsupported playback format: m3u8";
  }
}

export default ArtPlayerItem;
