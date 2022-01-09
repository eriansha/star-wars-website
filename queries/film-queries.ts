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

export const GET_FILM_IDS = gql`
  query getFilmIds {
    allFilms {
      totalCount
      edges {
        node {
          id
        }
      }
    }
  }
`

export const GET_FILM_DETAIL = gql`
  query getFilmDetail($id: ID!) {
    film(id: $id) {
      id
      title
      episodeID
      openingCrawl
      producers
      director
      characterConnection {
        characters {
          name
          species {
            id
            classification
            name
          }
        }
      }
      starshipConnection {
        starships {
          id
          name
        }
      }
      planetConnection {
        planets {
          name
          gravity
        }
      }
    }
  }
`
