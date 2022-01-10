import Image from 'next/image'
import Link from 'next/link'

import { Person } from '@/types/person'

interface PersonCardProps {
  personId: Person['id']
  name: Person['name']
}

export default function PersonCard({ personId, name }: PersonCardProps) {
  return (
    <div className='bg-white my-3 shadow-xl'>
      <Image
        src='https://via.placeholder.com/200x200'
        layout='fixed'
        width={200}
        height={200}
        alt='film-poster'
      />
      <Link href={`/people/${personId}`}>
        <a data-testid='person-link'>
          <h5 data-testid='person-name' className='text-black'>{name}</h5>
        </a>
      </Link>
    </div>
  )
}
