import React from 'react'
import { render, cleanup, wait, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Header from './Header'

const categoryTypes = [
  {
    code: 'work',
    description: 'Work'
  },
  {
    code: 'study',
    description: 'Study'
  },
  {
    code: 'lifestyle',
    description: 'Lifestyle'
  },
  {
    code: 'hobbies',
    description: 'Hobbies'
  }
]

afterEach(cleanup) // Unmounts React trees that were mounted with render.

test('render Header without activeLink and click on first Link', () => {
  const handleCategoryTypeClick = jest.fn()
  const { getByText } = render(
    <Header
      links={categoryTypes}
      activeLink=""
      onLinkClick={handleCategoryTypeClick}
    />
  )

  fireEvent.click(getByText(/work/i))
  expect(handleCategoryTypeClick).toHaveBeenCalledTimes(1)
})

it('render Header with activeLink', async () => {
  const { queryByText } = render(
    <Header
      links={categoryTypes}
      activeLink="lifestyle"
      onLinkClick={jest.fn()}
    />
  )

  await wait(() => expect(queryByText(/lifestyle/i)).not.toBeInTheDocument())
})
