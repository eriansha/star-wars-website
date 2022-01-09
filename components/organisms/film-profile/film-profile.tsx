import Image from 'next/image'

import { Film } from '@/types/film'

type FilmProfileProps = Film

import { mapImagePoster } from '@/services/film-service'

const FilmProfile = ({
  title,
  openingCrawl,
  episodeID,
  director,
  producers
}: FilmProfileProps) => {
  const posterImg = mapImagePoster(episodeID)

  return (
    <section className='flex gap-x-12 pb-2'>
      <div className='h-2/12 w-5/12'>
        <Image
          className='rounded-lg'
          src={posterImg}
          layout='responsive'
          width={200}
          height={270}
          quality={100}
          alt='film-poster'
        />
      </div>

      <div>
        <h1 className='mb-2 text-5xl'>{title}</h1>
        <div className='my-3'>
          <h3>{`Director: ${director}`}</h3>
          <h3>{`Producers: ${producers}`}</h3>
        </div>

        <h2 className='mb-2 text-3xl'>Synopsis</h2>
        <p>{openingCrawl}</p>
      </div>
    </section>
  )
}

export default FilmProfile
