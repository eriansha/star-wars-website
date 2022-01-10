import { render } from '@testing-library/react'

import PeopleSection from './people-section'

const props = [
  {
    personId: 'asd',
    name: 'title'
  }
]

describe('Person Card', () => {
  it('renders without crashing', () => {
    render(<PeopleSection {...props} />)
  })
})
