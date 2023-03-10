// import axios from "axios";
// import { ChangeEvent, MouseEvent, ReactElement, useState } from "react";
import { ReactElement } from "react";
import SearchItem from "./SearchItem";

// interface IAnime {
//   id: string;
//   image: string;
//   releaseDate: string;
//   subOrDub: string;
//   title: string;
//   url: string;
// }
//
// interface IEpisode {
//   id: string;
//   number: number;
//   url: string;
// }
//
// interface IAnimeDetatiled extends IAnime {
//   description: string;
//   episodes: IEpisode[];
//   genres: string[];
//   otherName: string;
//   status: string;
//   totalEpisodes: number;
//   type: string;
// }

function Search(): ReactElement {
  // const [query, setQuery] = useState("");
  // const [listAnime, setListAnime] = useState<IAnimeDetatiled[]>([]);
  //
  // function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //   setQuery(e.target.value);
  // }
  //
  // async function search(e: MouseEvent) {
  //   const response = await data(query);
  //   const response2 = await getDetailedInfo(response.results);
  //   console.log(response.results);
  //   console.log(response2);
  //   setListAnime(response2);
  // }
  //
  // async function getDetailedInfo(animes: IAnime[]) {
  //   const animeDetailed = animes.map(
  //     async (anime: IAnime) => await getAnimeInfo(anime.id)
  //   );
  //   return Promise.all(animeDetailed);
  // }
  //
  // async function data(query: string) {
  //   const url = "https://api.consumet.org/anime/gogoanime/";
  //   try {
  //     const { data } = await axios.get(url + query, {
  //       params: { page: 1 },
  //     });
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  //
  // async function getAnimeInfo(id: string) {
  //   const url = "https://api.consumet.org/anime/gogoanime/info/";
  //   try {
  //     const { data } = await axios.get(url + id);
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div>
      {/* <input value={query} onChange={handleChange} /> */}
      {/* <button type="button" onClick={search}> */}
      {/*   search */}
      {/* </button> */}
      {/* <div */}
      {/*   style={{ */}
      {/*     display: "grid", */}
      {/*     gridTemplateColumns: "repeat(5, 1fr)", */}
      {/*     columnGap: "3rem", */}
      {/*     rowGap: "3rem", */}
      {/*     width: "900px", */}
      {/*     margin: "0 auto", */}
      {/*   }} */}
      {/* > */}
      {/*   {listAnime.map((anime) => ( */}
      {/*     <div key={anime.id}> */}
      {/*       <img src={anime.image} alt="" /> */}
      {/*       {anime.title} */}
      {/*       <div> */}
      {/*         {anime.genres.map((genre) => ( */}
      {/*           <span key={genre}>{genre}</span> */}
      {/*         ))} */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </div> */}
      <SearchItem />
    </div>
  );
}

export default Search;
