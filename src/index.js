import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './index.style'
import { StateProvider, useStateValue, types } from './state/provider'
import Header from './components/Header/Header'
import LogoContainer from './components/LogoContainer/LogoContainer'
import useFetch from './utils/fetch'

const App = () => {
  const categoryTypes = useFetch('/categoryTypes')
  const categories = useFetch('/categories')

  const [{ logoState }, dispatch] = useStateValue()

  const [categoryTypeActive, setCategoryTypeActive] = useState('')
  const [categoryActive, setCategoryActive] = useState('')

  if (logoState === 'identify') {
    setTimeout(() => {
      dispatch({ type: types.LOGO_STATE_CHANGED, state: 'discover' })
    }, 300)
    setTimeout(() => {
      dispatch({ type: types.LOGO_STATE_CHANGED, state: 'connect' })
    }, 800)
    setTimeout(() => {
      dispatch({ type: types.LOGO_STATE_CHANGED, state: 'construct' })
    }, 1100)
  }

  const handleCategoryTypeClick = categoryType => {
    if (categoryType !== categoryTypeActive) {
      setCategoryTypeActive(categoryType)
      dispatch({ type: types.LOGO_STATE_CHANGED, state: 'explore' })
    } else {
      setCategoryTypeActive('')
      dispatch({ type: types.LOGO_STATE_CHANGED, state: 'construct' })
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
      <StateProvider>
        {categoryTypes.data && (
          <Header
            links={categoryTypes.data}
            activeLink={categoryTypeActive}
            onLinkClick={categoryType => handleCategoryTypeClick(categoryType)}
          />
        )}
        {categories.data && (
          <LogoContainer
            bricks={categories.data}
            state={logoState}
            categoryTypeActive={categoryTypeActive}
            categoryActive={categoryActive}
            onBrickClick={category => handleCategoryClick(category)}
          />
        )}
      </StateProvider>
    </React.Fragment>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))
