interface Thumbnail {
  path:      string;
  extension: string;
}

interface URL {
  type: string;
  url:  string;
}

// CHARACTERS TYPES ////////////////////////
interface Character {
  id:          number;
  name:        string;
  description: string;
  modified:    string;
  thumbnail:   Thumbnail;
  resourceURI: string;
  comics:      CharacterComics;
  series:      CharacterComics;
  stories:     CharacterStories;
  events:      CharacterComics;
  urls:        URL[];
}

interface CharacterComics {
  available:     number;
  collectionURI: string;
  items:         CharacterItem[];
  returned:      number;
}

interface CharacterItem {
  resourceURI: string;
  name:        string;
}

interface CharacterStories {
  available:     number;
  collectionURI: string;
  items:         CharacterStoriesItem[];
  returned:      number;
}

interface CharacterStoriesItem {
  resourceURI: string;
  name:        string;
  type:        CharacterType;
}

enum CharacterType {
  Cover = "cover",
  InteriorStory = "interiorStory",
}

interface CharactersData {
  characters: Character[] | null
  hasError: string | null
  isLoading: boolean,
  totalCharacters: number
}
interface CharactersContextType {
  charactersData: CharactersData | null
  offset: number,
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

// COMICS TYPES ////////////////////////
interface Comic {
  id:                 number;
  digitalId:          number;
  title:              string;
  issueNumber:        number;
  variantDescription: string;
  description:        null;
  modified:           string;
  isbn:               string;
  upc:                string;
  diamondCode:        string;
  ean:                string;
  issn:               string;
  format:             string;
  pageCount:          number;
  textObjects:        any[];
  resourceURI:        string;
  urls:               URL[];
  series:             ComicSeries;
  variants:           any[];
  collections:        any[];
  collectedIssues:    any[];
  dates:              ComicDateElement[];
  prices:             ComicPrice[];
  thumbnail:          Thumbnail;
  images:             Thumbnail[];
  creators:           ComicCharacters;
  characters:         ComicCharacters;
  stories:            ComicCharacters;
  events:             ComicCharacters;
}

interface ComicCharacters {
  available:     number;
  collectionURI: string;
  items:         ComicItem[];
  returned:      number;
}

interface ComicItem {
  resourceURI: string;
  name:        string;
  role?:       string;
  type?:       string;
}

interface ComicDateElement {
  type: string;
  date: string;
}

interface ComicPrice {
  type:  string;
  price: number;
}

interface ComicSeries {
  resourceURI: string;
  name:        string;
}

interface ComicsData {
  comics: Comic[] | null
  hasError: string | null
  isLoading: boolean,
  totalComics: number
}
interface ComicsContextType {
  comicsData: ComicsData | null
  offset: number
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}


// SERIES TYPES //////////////////////
interface Serie {
  id:          number;
  title:       string;
  description: null;
  resourceURI: string;
  urls:        URL[];
  startYear:   number;
  endYear:     number;
  rating:      string;
  type:        string;
  modified:    string;
  thumbnail:   Thumbnail;
  creators:    SerieCharacters;
  SerieCharacters:  SerieCharacters;
  stories:     SerieCharacters;
  comics:      SerieCharacters;
  events:      SerieCharacters;
  next:        null;
  previous:    null;
}

interface SerieCharacters {
  available:     number;
  collectionURI: string;
  items:         SerieItem[];
  returned:      number;
}

interface SerieItem {
  resourceURI: string;
  name:        string;
  role?:       string;
  type?:       string;
}

interface SeriesData {
  series: Serie[] | null
  hasError: string | null
  isLoading: boolean,
  totalSeries: number
}
interface SeriesContextType {
  seriesData: SeriesData | null
  offset: number
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

export type { Character, CharactersData, CharactersContextType, Comic, ComicsData, ComicsContextType, Serie, SeriesData, SeriesContextType}