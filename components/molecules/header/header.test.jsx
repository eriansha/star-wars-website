import { cleanup, render } from '@testing-library/react'
import ReactDOM from 'react-dom'

import Header from './header'

afterEach(cleanup)

describe('Footer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
  })

  // TODO: fix unit test
  // it('contains image', () => {
  //   const alt='starwars banner'
  //   const src = '/img/brand.png'

  //   const tree = render(<Header />)
  //   const img = tree.getByAltText(alt)
  //   expect(img.getAttribute('src')).toBe(src);
  // })

  it('matches snapshot', () => {
    const tree = render(<Header />)
    expect(tree.container).toMatchSnapshot();
  })
})
