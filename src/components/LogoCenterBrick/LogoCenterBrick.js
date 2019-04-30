import React from 'react'
// import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Image, Icon } from './LogoCenterBrick.style'
import useSpringStyles from './LogoCenterBrick.spring'
import { useLogoState } from '../../state/action-hooks'

const Anim = {
  Container: animated(Container),
  Image: animated(Image),
  Icon: animated(Icon)
}

const ImgCenterBrick = require('../../images/eu.jpg')

const LogoCenterBrick = () => {
  const [logoState] = useLogoState()

  const { containerStyle, imageStyle, iconStyle } = useSpringStyles(logoState)

  return (
    <Anim.Container style={containerStyle}>
      <Anim.Image
        src={ImgCenterBrick}
        alt="Gustavo Henrique Kich"
        style={imageStyle}
      />
      <Anim.Icon style={iconStyle}>
        <FontAwesomeIcon icon={['fas', 'user']} />
      </Anim.Icon>
    </Anim.Container>
  )
}

// LogoCenterBrick.propTypes = {}

export default LogoCenterBrick
