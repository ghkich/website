import React from 'react'
import { GlobalStyle } from './App.style'
import { useLogoState } from '../../state/action-hooks'
import Header from '../Header/Header'
import LogoContainer from '../LogoContainer/LogoContainer'
import LogoText from '../LogoText/LogoText'
import useFetch from '../../utils/fetch'

const App = () => {
  const categoryTypes = useFetch('/categoryTypes')
  const categories = useFetch('/categories')

  const dataReady = categories.data.length > 0

  const [logoState, setLogoState] = useLogoState()

  if (dataReady) {
    if (logoState === 'identify') {
      setTimeout(() => {
        setLogoState('discover')
      }, 300)
      setTimeout(() => {
        setLogoState('connect')
      }, 800)
      setTimeout(() => {
        setLogoState('construct')
      }, 1200)
    }
  }

  if (categoryTypes.error || categories.error) {
    return <div>Ocorreu um erro, recarregue a página.</div>
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header links={categoryTypes.data} />
      <LogoContainer bricks={categories.data} />
      <LogoText />
    </React.Fragment>
  )
}

export default App
