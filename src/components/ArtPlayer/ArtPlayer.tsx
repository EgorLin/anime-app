import { useEffect, useRef } from "react";
import Artplayer from "artplayer";
import Hls from "hls.js";

interface IProps {
  option: {
    url: string;
    container?: HTMLDivElement | string;
  };
  getInstance: (art: Artplayer) => any;
  style?: string;
}

function ArtPlayer({ option, getInstance, ...rest }: IProps) {
  const artRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current ? artRef.current : "",
      type: "m3u8",
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

export default ArtPlayer;
/*
  useEffect(() => {
    data()
  }, [])

  const url =
    'https://api.consumet.org/anime/gogoanime/watch/spy-x-family-episode-1'
  const data = async () => {
    try {
      const { data } = await axios.get(url, { params: { server: 'gogocdn' } })
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='App'>
      <ArtPlayer
        option={{
          //url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          url: 'https://www02.gofcdn.com/videos/hls/yUc-RjpUBOf82KOsAFnBiA/1676331507/184141/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1649522303.360.m3u8',
        }}
        style={{
          width: '600px',
          height: '400px',
          margin: '60px auto 0',
        }}
        getInstance={(art) => console.info(art)}
      />
    </div>
  )
*/
