import { createGlobalStyle } from 'styled-components'
import Colors from './config/colors'

const sanitize = require('sanitize.css') // sanitize some browser differences

const GlobalStyle = createGlobalStyle`
  ${sanitize}

  body {
    color: ${Colors.gray100};
  }
`

export { GlobalStyle }
