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
    <div className='group relative'>
      <Link href={`/films/${filmId}`}>
        <a>
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
          <div className='absolute font-medium invisible left-1/2 right-1/2 text-center top-1/3 group-hover:visible'>
            <h3 className='underline'>{title}</h3>
          </div>
        </a>
      </Link>
    </div>
  )
}
