import React from 'react'
// import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Container, Image, Icon } from './LogoCenterBrick.style'
import { useCenterBrickSpring } from './LogoCenterBrick.spring'
import { useLogoState } from '../../state/action-hooks'

const AnimatedContainer = animated(Container)
const AnimatedImage = animated(Image)

const ImgCenterBrick = require('../../images/eu.jpg')

const LogoCenterBrick = () => {
  const [logoState] = useLogoState()

  const { containerSpring, imageSpring } = useCenterBrickSpring(logoState)

  return (
    <AnimatedContainer style={containerSpring} logoState={logoState}>
      <AnimatedImage
        src={ImgCenterBrick}
        alt="Gustavo Henrique Kich"
        style={imageSpring}
      />
      <Icon icon={['fas', 'user']} logoState={logoState} />
    </AnimatedContainer>
  )
}

// LogoCenterBrick.propTypes = {}

export default LogoCenterBrick
