import { cleanup, render } from '@testing-library/react'

import PeopleSection from './people-section'

import { Person } from '@/types/person'

const props: Person[] = [
  {
    id: 'abcdefg',
    name: 'Luke Sky Walker'
  },
  {
    id: 'efghijk',
    name: 'Count Dooku'
  }
]

const mockPersonCard = jest.fn()
jest.mock('@/molecules/person-card', () => () => {
  mockPersonCard(props)
  return <div>peson card</div>
})

afterEach(() => {
  cleanup
  jest.clearAllMocks()
})

describe('Person Section', () => {
  it('renders without crashing', () => {
    render(<PeopleSection people={props} />)
  })

  it('render title', () => {
    const { getByTestId } = render(<PeopleSection people={props} />)
    expect(getByTestId('title')).toHaveTextContent('People')
  })

  it('render person card as many as props', () => {
    render(<PeopleSection people={props} />)
    expect(mockPersonCard).toHaveBeenCalledTimes(2)
    expect(mockPersonCard).toHaveBeenCalledWith(props)
  })

  it('do not render person card when people props in empty or undefined', () => {
    render(<PeopleSection />)
    expect(mockPersonCard).not.toHaveBeenCalled()
  })

  it('matches snapshot', () => {
    const tree = render(<PeopleSection people={props} />)
    expect(tree.container).toMatchSnapshot()
  })
})
