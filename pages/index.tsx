import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { GET_FILMS } from 'queries/film-queries'

import client from '@/lib/apollo-client'

import FilmPosterSection from '@/organisms/film-poster-section'

import { Film } from '@/types/film'

interface HomeProps {
  films: Film[]
}

const Home: NextPage<HomeProps> = ({ films }: HomeProps) => {
  return (
    <main>
      <Image
        layout='responsive'
        width={1440}
        height={450}
        src='/img/banner.jpeg'
        alt='banner'
      />

      <FilmPosterSection films={films} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: GET_FILMS })

  return {
    props: {
      films: data.allFilms.films
    },
    revalidate: 1
  }
}

export default Home
