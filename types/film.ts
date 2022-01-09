import { Person } from '@/types/person'

export interface FilmCharacterConnection {
  characters: Person[]
}
export interface Film {
  id?: string
  title: string
  episodeID: number
  openingCrawl?: string
  director?: string
  producers?: string[]
  characterConnection?: FilmCharacterConnection
}

export interface FilmEdge {
  node: Film
  cursor: string
}
