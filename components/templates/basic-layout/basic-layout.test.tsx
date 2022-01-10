import { cleanup, render, screen } from '@testing-library/react'

import BasicLayout from './basic-layout'

const mockHeader = jest.fn()
const mockFooter = jest.fn()

jest.mock('@/organisms/header', () => () => {
  mockHeader()
  return <div>header</div>
})

jest.mock('@/organisms/footer', () => () => {
  mockFooter()
  return <div>footer</div>
})

const TestedComponent = () => (
  <BasicLayout>
    <h1>Rendering Layout</h1>
  </BasicLayout>
)

afterEach(() => {
  cleanup
  jest.clearAllMocks()
})

describe('Person Section', () => {
  it('renders without crashing', () => {
    render(<TestedComponent />)
  })

  it('render header and footer', () => {
    render(<TestedComponent />)
    expect(mockHeader).toHaveBeenCalledTimes(1)
    expect(mockFooter).toHaveBeenCalledTimes(1)
  })

  it('render children props', () => {
    const { getByRole } = render(<TestedComponent />)

    const childrentElem = screen.getByRole('heading', {
      name: 'Rendering Layout'
    })

    expect(getByRole('main')).toContainElement(childrentElem)
  })

  it('matches snapshot', () => {
    const tree = render(<TestedComponent />)
    expect(tree.container).toMatchSnapshot()
  })
})
