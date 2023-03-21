interface IStreamSource {
  url: string;
  isM3U8: boolean;
  quality: string;
}

export interface IStreamInfo {
  download: string;
  headers: Object;
  sources: IStreamSource[];
}
