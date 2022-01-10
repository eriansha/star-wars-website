import { cleanup, render } from '@testing-library/react'

import FilmPosterSection from './film-poster-section'

import { Film } from '@/types/film'

const props: Film[] = [
  {
    id: 'abcdefg',
    title: 'New Hope',
    episodeID: 1
  },
  {
    id: 'efghijk',
    title: 'Empire Strike Back',
    episodeID: 2
  }
]

const mockPersonCard = jest.fn()
jest.mock('@/molecules/film-card', () => () => {
  mockPersonCard(props)
  return <div>film card</div>
})

afterEach(() => {
  cleanup
  jest.clearAllMocks()
})

describe('Film Poster Section', () => {
  it('renders without crashing', () => {
    render(<FilmPosterSection films={props} />)
  })

  it('render title', () => {
    const { getByTestId } = render(<FilmPosterSection films={props} />)
    expect(getByTestId('title')).toHaveTextContent('Movie')
  })

  it('render film card as many as props', () => {
    render(<FilmPosterSection films={props} />)
    expect(mockPersonCard).toHaveBeenCalledTimes(2)
    expect(mockPersonCard).toHaveBeenCalledWith(props)
  })

  it('do not render film card when film props in empty or undefined', () => {
    render(<FilmPosterSection films={[]} />)
    expect(mockPersonCard).not.toHaveBeenCalled()
  })

  it('matches snapshot', () => {
    const tree = render(<FilmPosterSection films={props} />)
    expect(tree.container).toMatchSnapshot()
  })
})
