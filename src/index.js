import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle } from './index.style'
import Header from './components/Header/Header'
import Logo from './components/Logo/Logo'
import useFetch from './utils/fetch'

const App = () => {
  const categoryTypes = useFetch('/categoryTypes')
  const categories = useFetch('/categories')

  const [logoState, setLogoState] = useState('identify')
  const [categoryTypeActive, setCategoryTypeActive] = useState('')
  const [categoryActive, setCategoryActive] = useState('')

  if (logoState === 'identify') {
    setTimeout(() => {
      setLogoState('discover')
    }, 300)
    setTimeout(() => {
      setLogoState('connect')
    }, 800)
    setTimeout(() => {
      setLogoState('construct')
    }, 1100)
  }

  const handleCategoryTypeClick = categoryType => {
    if (categoryType !== categoryTypeActive) {
      setCategoryTypeActive(categoryType)
      setLogoState('explore')
    } else {
      setCategoryTypeActive('')
      setLogoState('construct')
    }
  }

  const handleCategoryClick = category => {
    if (category !== categoryActive) {
      setCategoryActive(category)
    } else {
      setCategoryActive('')
    }
  }

  if (categoryTypes.error || categories.error) {
    return <div>ERRO</div>
  }

  if (!categoryTypes.data) {
    return <div>Loading...</div>
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      {categoryTypes.data && (
        <Header
          links={categoryTypes.data}
          activeLink={categoryTypeActive}
          onLinkClick={categoryType => handleCategoryTypeClick(categoryType)}
        />
      )}
      {categories.data && (
        <Logo
          bricks={categories.data}
          state={logoState}
          categoryTypeActive={categoryTypeActive}
          categoryActive={categoryActive}
          onBrickClick={category => handleCategoryClick(category)}
        />
      )}
    </React.Fragment>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))
