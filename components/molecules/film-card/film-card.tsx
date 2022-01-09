import Image from 'next/image'
import Link from 'next/link'

import { mapImagePoster } from '@/services/film-service'

import { Film } from '@/types/film'

interface FilmCardProps extends Film {
  filmId: Film['id']
}

export default function FilmCard({ filmId, title, episodeID }: FilmCardProps) {
  const posterImg = mapImagePoster(episodeID)

  return (
    <div className='group'>
      <Link href={`/films/${filmId}`}>
        <a className='relative'>
          <Image
            className='duration-500 rounded-lg transition-all group-hover:brightness-50'
            src={posterImg}
            layout='fixed'
            width={200}
            height={270}
            quality={100}
            objectFit='cover'
            alt='film-poster'
          />
          <h3 className='absolute bottom-24 font-medium inset-x-0 invisible text-center underline group-hover:visible'>
            {title}
          </h3>
        </a>
      </Link>
    </div>
  )
}
