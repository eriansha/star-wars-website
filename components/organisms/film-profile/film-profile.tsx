import Image from 'next/image'

import { Film } from '@/types/film'

type FilmProfileProps = Film

import { mapImagePoster } from '@/services/film-service'

export default function FilmProfile({
  title,
  openingCrawl,
  episodeID,
  director,
  producers
}: FilmProfileProps) {
  const posterImg = mapImagePoster(episodeID)

  return (
    <section className='flex flex-col md:flex-row md:gap-x-10'>
      <div className='flex justify-center pb-5'>
        <Image
          className='rounded-lg'
          src={posterImg}
          layout='fixed'
          width={250}
          height={350}
          quality={100}
          alt='film-poster'
        />
      </div>

      <div>
        <h1 data-testid='film-title' className='font-bold mb-2 text-2xl md:text-5xl'>{`Star Wars: ${title}`}</h1>
        <div className='my-3'>
          <h3 data-testid='film-director'>{`Director: ${director}`}</h3>
          <h3 data-testid='film-producers'>{`Producers: ${producers}`}</h3>
        </div>

        <h2 className='mb-2 text-2xl md:text-3xl'>Synopsis</h2>
        <p data-testid='film-synopsis'>{openingCrawl}</p>
      </div>
    </section>
  )
}
