import PropTypes from 'prop-types'
import React from 'react'
import { animated } from 'react-spring'

import { useLogoState } from '../../state/action-hooks'
import useSpringStyles from './StartLinks.spring'
import { Container } from './StartLinks.style'

const Anim = {
  Container: animated(Container),
}

const StartLinks = ({onRightClick}) => {
  const [logoState] = useLogoState()
  const {containerStyle} = useSpringStyles(logoState)

  return (
    <Anim.Container style={containerStyle}>
      <div>Resume</div>
      <div style={{margin: '0 10px', opacity: '0.3'}}>|</div>
      <div role="presentation" onClick={onRightClick}>
        Website
      </div>
    </Anim.Container>
  )
}

StartLinks.propTypes = {
  onRightClick: PropTypes.func.isRequired,
}

export default StartLinks
