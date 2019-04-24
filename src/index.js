import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './index.style'
import StateProvider from './state/provider'
import { initialState, reducer } from './state/reducer'
import App2 from './index.1'

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <GlobalStyle />
      <App2 />
    </StateProvider>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))
