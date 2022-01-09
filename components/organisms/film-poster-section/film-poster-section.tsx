import FilmCard from '@/molecules/film-card'

import { Film } from '@/types/film'

interface FilmPosterProps {
  films: Film[]
}

export default function FilmPosterSection({ films }: FilmPosterProps) {
  return (
    <section className='bg-gray-dark pb-24 pt-10 md:pt-24'>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold pb-16 text-5xl'>Movie</h1>

        <div className='flex flex-wrap gap-10 items-center justify-evenly mx-8'>
          {films.map((film, key) => (
            <FilmCard
              key={key}
              filmId={film.id}
              title={film.title}
              episodeID={film.episodeID}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
