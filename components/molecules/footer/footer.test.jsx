import { cleanup, render } from '@testing-library/react'
import ReactDOM from 'react-dom'

import Footer from './footer'

afterEach(cleanup)

describe('Footer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
  })

  it('renders author', () => {
    const { getByTestId } = render(<Footer />)
    const node = getByTestId('author')
    expect(node).toHaveTextContent('© Muhamad Ivan Putra Eriansya 2022');
  })

  // TODO: fix this unit test
  // it('renders social medias', () => {
  //   const { getByTestId } = render(<Footer />)
  //   const div = document.createElement(
  //     'div',
  //     {
  //       'data-testid':'social-medias',
  //       'className': 'flex mt-5 space-x-4'
  //     }
  //   )

  //   SOCIAL_MEDIAS.forEach((socialMedia, key) => {
  //     const anchor = document.createElement(
  //       'a', {
  //         key: key,
  //         href: socialMedia.href,
  //         rel: 'noreferrer',
  //         target: '_blank'
  //       }
  //     )
  //     anchor.textContent = socialMedia.label
  //     div.appendChild(anchor)
  //   })

  //   console.log(div)
  //   expect(getByTestId('social-medias')).toHave(div);
  // })

  it('matches snapshot', () => {
    const tree = render(<Footer />)
    expect(tree.container).toMatchSnapshot();
  })
})
