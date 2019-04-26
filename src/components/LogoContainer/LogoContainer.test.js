import React from 'react'
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from 'react-testing-library'
import 'jest-dom/extend-expect'
import LogoContainer from './LogoContainer'

describe('Logo test', () => {
  const categories = [
    {
      code: 'projects',
      description: 'Projects',
      color: 'biopro',
      icon: 'briefcase',
      iconType: 'fas',
      col: '4',
      row: '3'
    },
    {
      code: 'skills',
      description: 'Skills',
      color: 'pro',
      icon: 'code',
      iconType: 'fas',
      col: '5',
      row: '3'
    },
    {
      code: 'inspirations',
      description: 'Inspirations',
      color: 'procadpro',
      icon: 'lightbulb',
      iconType: 'fas',
      col: '5',
      row: '4'
    }
  ]

  const handleBrickClick = jest.fn()

  afterEach(cleanup) // Unmounts React trees that were mounted with render.

  test('if it renders the bricks with state identify', async () => {
    const { getByText } = render(
      <LogoContainer
        bricks={categories}
        state="identify"
        onBrickClick={handleBrickClick}
      />
    )

    // this events should not fire
    // the click events can only be fired on logo state 'construct' and 'explore'
    fireEvent.click(getByText('Projects'))
    fireEvent.click(getByText('Skills'))
    fireEvent.click(getByText('Inspirations'))

    await waitForElement(() => getByText('Projects'))
    await waitForElement(() => getByText('Skills'))
    await waitForElement(() => getByText('Inspirations'))
  })

  test('if it renders the bricks with state construct and fire events', async () => {
    const { getByText } = render(
      <LogoContainer
        bricks={categories}
        state="construct"
        onBrickClick={handleBrickClick}
      />
    )

    // this events should fire
    fireEvent.click(getByText('Projects'))
    fireEvent.click(getByText('Skills'))
    fireEvent.click(getByText('Inspirations'))

    await waitForElement(() => getByText('Projects'))
    await waitForElement(() => getByText('Skills'))
    await waitForElement(() => getByText('Inspirations'))
  })

  test('if the click events on bricks at logo with state construct (3) were fired', () => {
    expect(handleBrickClick).toHaveBeenCalledTimes(3)
  })
})
