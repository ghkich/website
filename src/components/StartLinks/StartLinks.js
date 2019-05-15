import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Container } from './StartLinks.style'
import useSpringStyles from './StartLinks.spring'
import { useLogoState } from '../../state/action-hooks'

const Anim = {
  Container: animated(Container)
}

const StartLinks = ({ onRightClick }) => {
  const [logoState] = useLogoState()
  const { containerStyle } = useSpringStyles(logoState)

  return (
    <Anim.Container style={containerStyle}>
      <div>Currículo</div>
      <div style={{ margin: '0 10px', opacity: '0.3' }}>|</div>
      <div role="presentation" onClick={onRightClick}>
        Website
      </div>
    </Anim.Container>
  )
}

StartLinks.propTypes = {
  onRightClick: PropTypes.func.isRequired
}

export default StartLinks
