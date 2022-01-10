import { render } from '@testing-library/react'

import PersonCard from './person-card'

const props = {
  personId: 'asd',
  name: 'title'
}

describe('Person Card', () => {
  it('renders without crashing', () => {
    render(<PersonCard {...props} />)
  })

  it('render title props', () => {
    const { getByTestId } = render(<PersonCard {...props} />)
    expect(getByTestId('person-name')).toHaveTextContent(props.name)
  })

  it('contains href in anchor', () => {
    const { getByTestId } = render(<PersonCard {...props} />)
    expect(getByTestId('person-link')).toHaveAttribute(
      'href',
      `/people/${props.personId}`
    )
  })

  it('matches snapshot', () => {
    const tree = render(<PersonCard {...props} />)
    expect(tree.container).toMatchSnapshot()
  })
})
