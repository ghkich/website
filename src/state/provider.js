import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

export const types = {
  LOGO_STATE_CHANGED: 'global/LOGO_STATE_CHANGED'
}

const initialState = {
  headerLinkActive: '',
  logoState: 'identify',
  logoBrickActive: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGO_STATE_CHANGED:
      return {
        ...state,
        logoState: action.logoState
      }

    default:
      return state
  }
}

export const StateContext = createContext()

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

StateProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useStateValue = () => useContext(StateContext)
