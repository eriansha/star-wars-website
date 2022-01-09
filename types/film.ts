import { Person } from '@/types/person'

export interface Film {
  id?: string
  title: string
  episodeID: number
  openingCrawl: string
  director: string
  producers: string[]
  characterConnection?: FilmCharacterConnection
}

export interface FilmCharacterConnection {
  characters: Person[]
}

export interface FilmEdge {
  node: Film
  cursor: string
}
