import { render } from '@testing-library/react'

import FilmProfile from './film-profile'

const props = {
  title: 'New Hope',
  openingCrawl:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, itaque?',
  episodeID: 99,
  director: 'Luke Skywalker',
  producers: ['Obi Wan Kenobi']
}

describe('Film Profile', () => {
  it('renders without crashing', () => {
    render(<FilmProfile {...props} />)
  })

  it('render title props', () => {
    const { getByTestId } = render(<FilmProfile {...props} />)
    expect(getByTestId('film-title')).toHaveTextContent(props.title)
  })

  it('render director props', () => {
    const { getByTestId } = render(<FilmProfile {...props} />)
    expect(getByTestId('film-director')).toHaveTextContent(props.director)
  })

  it('render producers props', () => {
    const { getByTestId } = render(<FilmProfile {...props} />)
    expect(getByTestId('film-producers')).toHaveTextContent(
      props.producers.join('.')
    )
  })

  it('render opening crawl props', () => {
    const { getByTestId } = render(<FilmProfile {...props} />)
    expect(getByTestId('film-synopsis')).toHaveTextContent(props.openingCrawl)
  })

  it('matches snapshot', () => {
    const tree = render(<FilmProfile {...props} />)
    expect(tree.container).toMatchSnapshot()
  })
})
