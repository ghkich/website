import React from 'react'
import { GlobalStyle } from './App.style'
import { useLogoState } from '../../state/action-hooks'
import Header from '../Header/Header'
import LogoContainer from '../LogoContainer/LogoContainer'
import LogoText from '../LogoText/LogoText'
import useFetch from '../../utils/fetch'

const App = () => {
  const locale = 'pt-br'
  const categories = useFetch('categories', locale)
  const subcategories = useFetch('subcategories', locale)
  const projects = useFetch('projects', locale)

  const dataReady =
    categories.data.length > 0 &&
    subcategories.data.length > 0 &&
    projects.data.length > 0

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

  if (subcategories.error || categories.error) {
    return <div>Ocorreu um erro, recarregue a página.</div>
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header links={categories.data} />
      <LogoContainer bricks={subcategories.data} />
      <LogoText />
      {projects.data.map(project => (
        <img
          key={project.id}
          src={project.cover}
          alt={project.title}
          style={{ width: '300px' }}
        />
      ))}
    </React.Fragment>
  )
}

export default App
