import React, { useState } from 'react'
import { GlobalStyle } from './App.style'
import { useLogoFormat } from '../../state/context'
import Header from '../Header/Header'
import LogoContainer from '../LogoContainer/LogoContainer'
import useFetch from '../../utils/fetch'

const App = () => {
  const categoryTypes = useFetch('/categoryTypes')
  const categories = useFetch('/categories')

  const [logoFormat, setLogoFormat] = useLogoFormat()

  const [categoryTypeActive, setCategoryTypeActive] = useState('')
  const [categoryActive, setCategoryActive] = useState('')

  if (logoFormat === 'identify') {
    setTimeout(() => {
      setLogoFormat('discover')
    }, 300)
    setTimeout(() => {
      setLogoFormat('connect')
    }, 800)
    setTimeout(() => {
      setLogoFormat('construct')
    }, 1100)
  }

  const handleCategoryTypeClick = categoryType => {
    if (categoryType !== categoryTypeActive) {
      setCategoryTypeActive(categoryType)
      setLogoFormat('explore')
    } else {
      setCategoryTypeActive('')
      setLogoFormat('construct')
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
        <LogoContainer
          bricks={categories.data}
          format={logoFormat}
          categoryTypeActive={categoryTypeActive}
          categoryActive={categoryActive}
          onBrickClick={category => handleCategoryClick(category)}
        />
      )}
    </React.Fragment>
  )
}

export default App
