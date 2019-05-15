import React from 'react'
import { GlobalStyle } from './App.style'
// import { useLogoState } from '../../state/action-hooks'
import Header from '../Header/Header'
import LogoContainer from '../LogoContainer/LogoContainer'
import LogoText from '../LogoText/LogoText'
import useFetch from '../../utils/fetch'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import ContactLinks from '../ContactLinks/ContactLinks'
import StartLinks from '../StartLinks/StartLinks'

const App = () => {
  const locale = 'pt-br'
  const categories = useFetch('categories', locale)
  const subcategories = useFetch('subcategories', locale)

  // const dataReady = categories.data.length > 0 && subcategories.data.length > 0

  // const [logoState, setLogoState] = useLogoState()

  // const discoverMore = () => {
  //   if (dataReady) {
  //     if (logoState === 'identify') {
  //       setTimeout(() => {
  //         setLogoState('discover')
  //       }, 50)
  //       setTimeout(() => {
  //         setLogoState('connect')
  //       }, 800)
  //       setTimeout(() => {
  //         setLogoState('construct')
  //       }, 1200)
  //     }
  //   }
  // }

  if (subcategories.error || categories.error) {
    return <div>Ocorreu um erro, recarregue a página.</div>
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header links={categories.data} />
      <LanguageToggle />
      <LogoContainer bricks={subcategories.data} />
      <StartLinks />
      <LogoText />
      <ContactLinks />
    </React.Fragment>
  )
}

export default App
