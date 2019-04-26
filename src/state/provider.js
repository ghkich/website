import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { reducer, initialState } from './reducer'

const StateContext = createContext()

export const useContextState = () => useContext(StateContext)

const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

StateProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default StateProvider
