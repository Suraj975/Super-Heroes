import { Dispatch, SetStateAction } from "react";

//API TYPES

export interface IMovieList {
  Search: ISearch[];
  totalResults: string;
  Response: string;
}

export interface ISearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type MovieListProps = {
  moviesList: ISearch[];
  totalResults: string;
  setMoviesList: Dispatch<SetStateAction<ISearch[]>>;
};

export interface IHeroDetails {
  response: string;
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}

export interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Biography {
  "full-name": string;
  "alter-egos": string;
  aliases: string[];
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
}

export interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  "eye-color": string;
  "hair-color": string;
}

export interface Work {
  occupation: string;
  base: string;
}

export interface Connections {
  "group-affiliation": string;
  relatives: string;
}

export interface Image {
  url: string;
}

export interface IMovieInfo {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  awards: string;
  directors: string;
  directorList: any[];
  writers: string;
  writerList: any[];
  stars: string;
  starList: StarList[];
  actorList: ActorList[];
  fullCast: FullCast;
  genres: string;
  genreList: GenreList[];
  companies: string;
  companyList: any[];
  countries: string;
  countryList: CountryList[];
  languages: string;
  languageList: LanguageList[];
  contentRating: any;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: any;
  ratings: Ratings;
  wikipedia: Wikipedia;
  posters: Posters;
  images: Images;
  trailer: Trailer;
  boxOffice: BoxOffice;
  tagline: any;
  keywords: string;
  keywordList: string[];
  similars: Similar[];
  tvSeriesInfo: any;
  tvEpisodeInfo: any;
  errorMessage: any;
}

export interface StarList {
  id: string;
  name: string;
}

export interface ActorList {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

export interface FullCast {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  directors: Directors;
  writers: Writers;
  actors: Actor[];
  others: Other[];
  errorMessage: string;
}

export interface Directors {
  job: string;
  items: any[];
}

export interface Writers {
  job: string;
  items: any[];
}

export interface Actor {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

export interface Other {
  job: string;
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  description: string;
}

export interface GenreList {
  key: string;
  value: string;
}

export interface CountryList {
  key: string;
  value: string;
}

export interface LanguageList {
  key: string;
  value: string;
}

export interface Ratings {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  imDb: string;
  metacritic: string;
  theMovieDb: string;
  rottenTomatoes: string;
  filmAffinity: string;
  errorMessage: string;
}

export interface Wikipedia {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  language: string;
  titleInLanguage: string;
  url: string;
  plotShort: PlotShort;
  plotFull: PlotFull;
  errorMessage: string;
}

export interface PlotShort {
  plainText: string;
  html: string;
}

export interface PlotFull {
  plainText: string;
  html: string;
}

export interface Posters {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  posters: any[];
  backdrops: any[];
  errorMessage: string;
}

export interface Images {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  items: Item2[];
  errorMessage: string;
}

export interface Item2 {
  title: string;
  image: string;
}

export interface Trailer {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  videoId: any;
  videoTitle: any;
  videoDescription: any;
  thumbnailUrl: any;
  uploadDate: any;
  link: any;
  linkEmbed: any;
  errorMessage: string;
}

export interface BoxOffice {
  budget: string;
  openingWeekendUSA: string;
  grossUSA: string;
  cumulativeWorldwideGross: string;
}

export interface Similar {
  id: string;
  title: string;
  image: string;
  imDbRating: string;
}

export type CharactersListType = {
  id: number;
  name: string;
  image: string;
};
