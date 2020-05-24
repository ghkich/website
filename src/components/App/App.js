import React from 'react'

import { useLogoState } from '../../state/action-hooks'
import useFetch from '../../utils/fetch'
import ContactLinks from '../ContactLinks/ContactLinks'
import Header from '../Header/Header'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import LogoContainer from '../LogoContainer/LogoContainer'
import LogoText from '../LogoText/LogoText'
import StartLinks from '../StartLinks/StartLinks'
import { GlobalStyle } from './App.style'

const App = () => {
  const locale = 'pt-br'
  const categories = useFetch('categories', locale)
  const subcategories = useFetch('subcategories', locale)

  const dataReady = categories.data.length > 0 && subcategories.data.length > 0

  const [logoState, setLogoState] = useLogoState()

  const discoverMore = () => {
    if (dataReady) {
      if (logoState === 'identify') {
        setTimeout(() => {
          setLogoState('discover')
        }, 50)
        setTimeout(() => {
          setLogoState('connect')
        }, 800)
        setTimeout(() => {
          setLogoState('construct')
        }, 1200)
      }
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      discoverMore()
    }, 1000)
  }, [dataReady])

  if (subcategories.error || categories.error) {
    return <div>Ocorreu um erro, recarregue a página.</div>
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header links={categories.data} />
      <LanguageToggle />
      <LogoContainer bricks={subcategories.data} />
      <StartLinks onRightClick={discoverMore} />
      <LogoText />
      <ContactLinks />
    </React.Fragment>
  )
}

export default App
