import React from 'react'
import Header from './components/Header/Header'
import { GlobalStyle } from './App.style'
import useFetch from './utils/fetch'
import Logo from './components/Logo/Logo'

const App = () => {
  const categoryTypes = useFetch('/categoryTypes')
  const categories = useFetch('/categories')
  console.log(categories)

  // Api.get('categories?lang=pt-BR').then(response => {
  //   dispatch({
  //     type: 'CATEGORIES_SUCCEEDED',
  //     payload: response.data
  //   })

  //   // if (state.logoState === 'identify') {
  //   //   setTimeout(() => {
  //   //     dispatch({
  //   //       type: 'LOGO_STATE_CHANGED',
  //   //       payload: 'discover'
  //   //     })
  //   //   }, 300)
  //   //   setTimeout(() => {
  //   //     dispatch({
  //   //       type: 'LOGO_STATE_CHANGED',
  //   //       payload: 'connect'
  //   //     })
  //   //   }, 800)
  //   //   setTimeout(() => {
  //   //     dispatch({
  //   //       type: 'LOGO_STATE_CHANGED',
  //   //       payload: 'construct'
  //   //     })
  //   //   }, 1100)
  //   // }
  // })

  const handleCategoryTypeClick = categoryType => {
    console.log(categoryType)
    // if (categoryType === state.categoryTypeActive) {
    //   dispatch({
    //     type: 'CATEGORY_TYPE_ACTIVE_UPDATED',
    //     payload: ''
    //   })
    //   dispatch({
    //     type: 'LOGO_STATE_CHANGED',
    //     payload: 'construct'
    //   })
    // } else {
    //   dispatch({
    //     type: 'CATEGORY_TYPE_ACTIVE_UPDATED',
    //     payload: categoryType
    //   })
    //   dispatch({
    //     type: 'LOGO_STATE_CHANGED',
    //     payload: 'explore'
    //   })
    // }
  }

  if (categoryTypes.error) {
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
          activeLink={categoryTypes.active}
          onLinkClick={categoryType => {
            handleCategoryTypeClick(categoryType)
          }}
        />
      )}
      {categories.data && <Logo bricks={categories.data} />}
    </React.Fragment>
  )
}

App.propTypes = {}

export default App
