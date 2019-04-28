import React from 'react'
// import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Container, Image, Icon } from './LogoCenterBrick.style'
import { useCenterBrickSpring } from './LogoCenterBrick.spring'
import { useLogoState } from '../../state/action-hooks'

const AnimatedContainer = animated(Container)
const AnimatedImage = animated(Image)
const AnimatedIcon = animated(Icon)

const ImgCenterBrick = require('../../images/eu.jpg')

const LogoCenterBrick = () => {
  const [logoState] = useLogoState()

  const { containerSpring, imageSpring, iconSpring } = useCenterBrickSpring(
    logoState
  )

  return (
    <AnimatedContainer style={containerSpring} logoState={logoState}>
      <AnimatedImage
        src={ImgCenterBrick}
        alt="Gustavo Henrique Kich"
        style={imageSpring}
      />
      <AnimatedIcon icon={['fas', 'user']} style={iconSpring} />
    </AnimatedContainer>
  )
}

// LogoCenterBrick.propTypes = {}

export default LogoCenterBrick
