import React from 'react'
import { GlobalStyle } from './App.style'
import { useLogoState } from '../../state/action-hooks'
import Header from '../Header/Header'
import LogoContainer from '../LogoContainer/LogoContainer'
import useFetch from '../../utils/fetch'
import Colors from '../../config/colors'

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
      <h1
        style={{
          width: '300px',
          margin: '40px auto 10px',
          textAlign: 'center',
          fontWeight: 'normal',
          letterSpacing: '2px',
          fontSize: '46px',
          color: Colors.gray700
        }}
      >
        gustavo<span style={{ color: Colors.gray400 }}>kich</span>
      </h1>
      <h2
        style={{
          width: '300px',
          margin: '0 auto',
          textAlign: 'center',
          fontWeight: 'normal',
          letterSpacing: '2px',
          fontSize: '12px',
          color: Colors.gray400
        }}
      >
        Front-end Developer
      </h2>
    </React.Fragment>
  )
}

export default App
