import { cleanup, fireEvent, render } from '@testing-library/react'

//import userEvent from '@testing-library/user-event'
import Header from './header'

afterEach(cleanup)

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Header />)
  })

  it('has \'sticky\' and \'top-0\' in header tag', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('main-header').classList.contains('sticky')).toBe(true)
    expect(getByTestId('main-header').classList.contains('top-0')).toBe(true)
  })

  it('does not have \'-translate-x-full\' in sidebar classname when initialize header', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('sidebar').classList.contains('-translate-x-full')).toBe(
      true
    )
  })

  it('has \'-translate-x-full\' in sidebar classname when user click sidebar button', () => {
    const { getByTestId } = render(<Header />)
    const sidebar = getByTestId('sidebar')

    fireEvent.click(getByTestId('sidebar-btn'))
    expect(sidebar.classList.contains('-translate-x-full')).toBe(false)
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
    expect(tree.container).toMatchSnapshot()
  })
})
