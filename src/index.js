import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './state/store'
import App from './App'

const store = configureStore()

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root

ReactDOM.render(<Root />, document.getElementById('app'))
