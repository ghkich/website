import React from 'react'
import {
  render,
  cleanup,
  wait,
  waitForElement,
  fireEvent
} from 'react-testing-library'
import 'jest-dom/extend-expect'
import Header from './Header'

describe('Header test', () => {
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

  const handleCategoryTypeClick = jest.fn()

  afterEach(cleanup) // Unmounts React trees that were mounted with render.

  test('if it renders all the links without an activeLink', async () => {
    const { getByText } = render(
      <Header
        links={categoryTypes}
        activeLink=""
        onLinkClick={handleCategoryTypeClick}
      />
    )

    await waitForElement(() => getByText('Work'))
    await waitForElement(() => getByText('Study'))
    await waitForElement(() => getByText('Lifestyle'))
    await waitForElement(() => getByText('Hobbies'))
  })

  test('if it renders with an activeLink and fire click events on Links', async () => {
    const { getByText, queryByText } = render(
      <Header
        links={categoryTypes}
        activeLink="lifestyle"
        onLinkClick={handleCategoryTypeClick}
      />
    )

    fireEvent.click(getByText('Work'))
    fireEvent.click(getByText('Study'))
    fireEvent.click(getByText('Hobbies'))

    // the description of an active link has to have only 3 letters
    fireEvent.click(getByText('Lif'))
    await wait(() => expect(queryByText('Lifestyle')).not.toBeInTheDocument())
  })

  test('if all the click events (4) were fired', () => {
    expect(handleCategoryTypeClick).toHaveBeenCalledTimes(4)
  })
})
