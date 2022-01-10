import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GET_FILMS } from 'queries/film-queries'

import client from '@/lib/apollo-client'

import FilmPosterSection from '@/organisms/film-poster-section'
import BasicLayout from '@/templates/basic-layout'

import { Film } from '@/types/film'

interface HomeProps {
  films: Film[]
}

const Home: NextPage<HomeProps> = ({ films }: HomeProps) => {
  return (
    <BasicLayout>
      <Head>
        <title>{'Star Wars Movie Page'}</title>
      </Head>
      <div className='hidden md:block'>
        <Image
          layout='responsive'
          width={1440}
          height={450}
          src='/img/banner.jpeg'
          alt='banner'
        />
      </div>

      <FilmPosterSection films={films} />
    </BasicLayout>
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
