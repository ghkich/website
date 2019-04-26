import React from 'react'
import ReactDOM from 'react-dom'
import { StateProvider } from './state/context'
import App from './components/App/App'

const Root = () => {
  return (
    <StateProvider>
      <App />
    </StateProvider>
  )
}

export default Root

ReactDOM.render(<Root />, document.getElementById('app'))
