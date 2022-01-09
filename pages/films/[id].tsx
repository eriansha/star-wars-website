//import { gql } from '@apollo/client'
import type { GetStaticPropsContext, NextPage } from 'next'

import client from '@/lib/apollo-client'

import FilmProfile from '@/organisms/film-profile'
import PeopleSection from '@/organisms/people-section'

import { GET_FILM_DETAIL, GET_FILM_IDS } from '@/queries/film-queries'

import { Film, FilmEdge } from '@/types/film'

interface FilmDetailProps {
  film: Film
}

const Home: NextPage<FilmDetailProps> = ({ film }: FilmDetailProps) => {
  const {
    characterConnection,
    ...filmDetailProps
  } = film

  const characters = characterConnection?.characters
  const { title, openingCrawl, episodeID, director, producers } =
    filmDetailProps

  return (
    <main className='m-5'>
      <FilmProfile
        title={title}
        openingCrawl={openingCrawl}
        episodeID={episodeID}
        director={director}
        producers={producers}
      />

      <PeopleSection people={characters} />
    </main>
  )
}

export const getStaticPaths = async () => {
  const { data } = await client.query({ query: GET_FILM_IDS })

  const edges = data?.allFilms?.edges || []
  const paths = edges.map((edge: FilmEdge) => ({
    params: {
      id: `${edge.node.id}`
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id
  if (id) {
    const { data } = await client.query({
      query: GET_FILM_DETAIL,
      variables: { id }
    })

    return {
      props: {
        film: data.film
      },
      revalidate: 1
    }
  }
  return {
    notFound: true
  }
}

export default Home
