// CHARACTERS TYPES
export interface Character {
  id:          number;
  name:        string;
  description: string;
  modified:    string;
  thumbnail:   CharacterThumbnail;
  resourceURI: string;
  comics:      CharacterComics;
  series:      CharacterComics;
  stories:     CharacterStories;
  events:      CharacterComics;
  urls:        CharacterURL[];
}

export interface CharacterComics {
  available:     number;
  collectionURI: string;
  items:         CharacterItem[];
  returned:      number;
}

export interface CharacterItem {
  resourceURI: string;
  name:        string;
}

export interface CharacterStories {
  available:     number;
  collectionURI: string;
  items:         CharacterStoriesItem[];
  returned:      number;
}

export interface CharacterStoriesItem {
  resourceURI: string;
  name:        string;
  type:        CharacterType;
}

export enum CharacterType {
  Cover = "cover",
  InteriorStory = "interiorStory",
}

export interface CharacterThumbnail {
  path:      string;
  extension: string;
}

export interface CharacterURL {
  type: string;
  url:  string;
}


export interface CharactersData {
  characters: Character[] | null
  hasError: string | null
  isLoading: boolean
}
export interface CharactersContextType {
  charactersData: CharactersData | null
  offset: number
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

// COMICS TYPES

export interface Comic {
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
  urls:               ComicURL[];
  series:             ComicSeries;
  variants:           any[];
  collections:        any[];
  collectedIssues:    any[];
  dates:              ComicDateElement[];
  prices:             ComicPrice[];
  thumbnail:          ComicThumbnail;
  images:             ComicThumbnail[];
  creators:           ComicCharacters;
  characters:         ComicCharacters;
  stories:            ComicCharacters;
  events:             ComicCharacters;
}

export interface ComicCharacters {
  available:     number;
  collectionURI: string;
  items:         ComicItem[];
  returned:      number;
}

export interface ComicItem {
  resourceURI: string;
  name:        string;
  role?:       string;
  type?:       string;
}

export interface ComicDateElement {
  type: string;
  date: string;
}

export interface ComicThumbnail {
  path:      string;
  extension: string;
}

export interface ComicPrice {
  type:  string;
  price: number;
}

export interface ComicSeries {
  resourceURI: string;
  name:        string;
}

export interface ComicURL {
  type: string;
  url:  string;
}

export interface ComicsData {
  comics: Comic[] | null
  hasError: string | null
  isLoading: boolean
}
export interface ComicsContextType {
  comicsData: ComicsData | null
  offset: number
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}
