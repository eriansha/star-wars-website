import PersonCard from '@/molecules/person-card'

import { Person } from '@/types/person'

interface PeopleSection {
  people: Person[]
}

export default function PeopleSection({ people }: PeopleSection) {
  return (
    <section className='bg-gray-dark py-5'>
      <h3 className='text-3xl'>People</h3>
      <div className='flex flex-wrap gap-x-4 justify-content-start'>
        {people.map((person, key) => (
          <PersonCard key={key} personId={person.id} name={person.name} />
        ))}
      </div>
    </section>
  )
}