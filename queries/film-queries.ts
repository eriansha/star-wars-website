import { gql } from '@apollo/client'

export const GET_FILMS = gql`
  query getAllFilms {
    allFilms {
      films {
        id
        title
        episodeID
      }
    }
  }
`
