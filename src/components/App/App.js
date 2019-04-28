import React from 'react'
import { GlobalStyle } from './App.style'
import { useLogoState } from '../../state/action-hooks'
import Header from '../Header/Header'
import LogoContainer from '../LogoContainer/LogoContainer'
import useFetch from '../../utils/fetch'

const App = () => {
  const categoryTypes = useFetch('/categoryTypes')
  const categories = useFetch('/categories')

  const [logoState, setLogoState] = useLogoState()

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
