import { createGlobalStyle } from 'styled-components'
import Colors from '../../config/colors'

const sanitize = require('sanitize.css') // sanitize some browser differences

const GlobalStyle = createGlobalStyle`
  ${sanitize}

  body {
    background-color: ${Colors.gray100};
    overflow: hidden;
  }
`

export { GlobalStyle }
