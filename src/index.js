import React from "react"
import ReactDOM from "react-dom"
import { Test } from "./index.style"

const imgAppSplash = require("./images/app-splash.png")

const App = () => {
  return (
    <div>
      <Test>
        <img src={imgAppSplash} alt="lalala" />
        <p>React here!</p>
        <p>React here!</p>
        <p>React here!</p>
        <p>React here!</p>
      </Test>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById("app"))
