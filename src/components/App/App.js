import React from 'react'
import { GlobalStyle } from './App.style'
import { useLogoFormat } from '../../state/action-hooks'
import Header from '../Header/Header'
import LogoContainer from '../LogoContainer/LogoContainer'
import useFetch from '../../utils/fetch'

const App = () => {
  const categoryTypes = useFetch('/categoryTypes')
  const categories = useFetch('/categories')

  const [logoFormat, setLogoFormat] = useLogoFormat()

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

  if (categoryTypes.error || categories.error) {
    return <div>ERRO</div>
  }

  if (!categoryTypes.data) {
    return <div>Loading...</div>
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      {categoryTypes.data && <Header links={categoryTypes.data} />}
      {categories.data && <LogoContainer bricks={categories.data} />}
    </React.Fragment>
  )
}

export default App
