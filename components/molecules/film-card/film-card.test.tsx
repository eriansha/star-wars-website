import { render } from '@testing-library/react'

import FilmCard from './film-card'

const props = {
  filmId: 'abc',
  title: 'title',
  episodeID: 1
}

describe('Film Card', () => {
  it('renders without crashing', () => {
    render(<FilmCard {...props} />)
  })

  it('render title props', () => {
    const { getByTestId } = render(<FilmCard {...props} />)
    expect(getByTestId('film-title')).toHaveTextContent(props.title)
  })

  it('contains href in anchor', () => {
    const { getByTestId } = render(<FilmCard {...props} />)
    expect(getByTestId('detail-link')).toHaveAttribute(
      'href',
      `/films/${props.filmId}`
    )
  })

  it('matches snapshot', () => {
    const tree = render(<FilmCard {...props} />)
    expect(tree.container).toMatchSnapshot()
  })
})
