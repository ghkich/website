import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const StateContext = createContext()

const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

const useStateValue = () => useContext(StateContext)

export default StateProvider

export { StateContext, useStateValue }
