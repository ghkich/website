import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const StateContext = createContext()

const types = {
  HEADER_ACTIVE_LINK_CHANGED: 'header/ACTIVE_LINK_CHANGED',
  LOGO_ACTIVE_BRICK_CHANGED: 'logo/ACTIVE_BRICK_CHANGED',
  LOGO_FORMAT_CHANGED: 'logo/FORMAT_CHANGED'
}

const initialState = {
  headerActiveLink: '',
  logoFormat: 'identify',
  logoActiveBrick: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGO_FORMAT_CHANGED:
      return {
        ...state,
        logoFormat: action.logoFormat
      }
    default:
      return state
  }
}

/* action hooks */
export const useLogoFormat = () => {
  const [{ logoFormat }, dispatch] = useContext(StateContext)
  return [
    logoFormat,
    newLogoForm =>
      dispatch({
        type: types.LOGO_FORMAT_CHANGED,
        logoFormat: newLogoForm
      })
  ]
}

// export const useLogoActiveBrick = () => {
//   const [{ activeBrick }, dispatch] = useContext(StateContext)
//   return [
//     logoFormat,
//     newLogoForm =>
//       dispatch({
//         type: types.LOGO_FORMAT_CHANGED,
//         logoFormat: newLogoForm
//       })
//   ]
// }

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

StateProvider.propTypes = {
  children: PropTypes.node.isRequired
}
