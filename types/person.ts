import { Planet } from '@/types/planet'
import { Species } from '@/types/species'

export interface Person {
  id: string
  name: string
  birthYear?: string
  eyeColor?: string
  gender?: string
  hairColor?: string
  height?: number
  masss?: number
  skinColor?: string
  homeWorld?: Planet
  species?: Species
}
