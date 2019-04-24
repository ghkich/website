import React, { useEffect } from 'react'
import Api from './utils/api'
import Header from './components/Header/Header'
import { useStateValue } from './state/provider'
import { requestCategoryTypes } from './state/categoryTypes'

const App2 = () => {
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    requestCategoryTypes(dispatch)

    Api.get('categories?lang=pt-BR').then(response => {
      dispatch({
        type: 'CATEGORIES_SUCCEEDED',
        payload: response.data
      })

      if (state.logoState === 'identify') {
        setTimeout(() => {
          dispatch({
            type: 'LOGO_STATE_CHANGED',
            payload: 'discover'
          })
        }, 300)
        setTimeout(() => {
          dispatch({
            type: 'LOGO_STATE_CHANGED',
            payload: 'connect'
          })
        }, 800)
        setTimeout(() => {
          dispatch({
            type: 'LOGO_STATE_CHANGED',
            payload: 'construct'
          })
        }, 1100)
      }
    })
  }, [])

  const handleCategoryTypeClick = categoryType => {
    if (categoryType === state.categoryTypeActive) {
      dispatch({
        type: 'CATEGORY_TYPE_ACTIVE_UPDATED',
        payload: ''
      })
      dispatch({
        type: 'LOGO_STATE_CHANGED',
        payload: 'construct'
      })
    } else {
      dispatch({
        type: 'CATEGORY_TYPE_ACTIVE_UPDATED',
        payload: categoryType
      })
      dispatch({
        type: 'LOGO_STATE_CHANGED',
        payload: 'explore'
      })
    }
  }

  if (!state.categoryTypes) {
    return <div>aa</div>
  }

  return (
    <React.Fragment>
      {state.categoryTypes.data && (
        <Header
          links={state.categoryTypes.data}
          activeLink={state.categoryTypes.active}
          onLinkClick={categoryType => {
            handleCategoryTypeClick(categoryType)
          }}
        />
      )}
    </React.Fragment>
  )
}

export default App2
