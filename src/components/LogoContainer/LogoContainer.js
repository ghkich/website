import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  CenterBrickContainer,
  CenterBrickImage,
  BrickIcon
} from './LogoContainer.style'
import { importAndAddIcons } from '../../utils/fontawesome'
import { useSpring, animated, config } from 'react-spring'
import {
  logoWidth,
  navWidth,
  brickSize,
  brickIconFontSize
} from '../../config/sizes'
import Colors from '../../config/colors'
import LogoBrick from '../LogoBrick/LogoBrick'
import { useLogoFormat, useHeaderActiveLink } from '../../state/action-hooks'

importAndAddIcons()

const AnimatedLogo = animated(Container)
const AnimatedCenterBrick = animated(CenterBrickContainer)
const AnimatedCenterImage = animated(CenterBrickImage)

const ImgCenterBrick = require('../../images/eu.jpg')

const getValue = headerActiveLink => {
  if (headerActiveLink === 'cad') {
    return 90 * 4
  }
  if (headerActiveLink === 'lif') {
    return 90 * 8
  }
  if (headerActiveLink === 'hob') {
    return 90 * 12
  }
  return 0
}

const LogoContainer = ({ bricks }) => {
  const [logoFormat] = useLogoFormat()
  const [headerActiveLink] = useHeaderActiveLink()

  const translateLogo = useSpring({
    to: {
      x: getValue(headerActiveLink)
    },
    config: config.default
  })
  const [logoProps, setLogoProps] = useSpring(() => ({
    from: {
      width: logoWidth,
      marginTop: 100
    }
  }))
  const [centerBrickProps, setCenterBrickProps] = useSpring(() => ({
    from: {
      width: brickSize * 3.5,
      height: brickSize * 3.5,
      top: brickSize * 0.75,
      left: brickSize * 0.75,
      backgroundColor: Colors.gray400,
      borderRadius: '50%',
      opacity: 1
    }
  }))

  const [imageProps, setImageProps] = useSpring(() => ({
    from: {
      opacity: 1
    }
  }))

  const [iconProps, setIconProps] = useSpring(() => ({
    from: {
      fontSize: brickIconFontSize * 3.5
    }
  }))

  if (logoFormat === 'connect') {
    setCenterBrickProps({
      backgroundColor: Colors.bio
    })
  }

  if (logoFormat === 'construct') {
    setImageProps({
      opacity: 0
    })

    setCenterBrickProps({
      width: brickSize,
      height: brickSize,
      top: brickSize * 2,
      left: brickSize * 2,
      borderRadius: '0%'
    })

    setIconProps({
      fontSize: brickIconFontSize
    })
  }

  if (logoFormat === 'explore') {
    setCenterBrickProps({
      width: 90,
      height: 90,
      top: 0,
      left: -90,
      opacity: 0
    })
    setLogoProps({
      width: navWidth,
      marginTop: 0
    })
  } else {
    setCenterBrickProps({
      opacity: 1
    })
    setLogoProps({
      width: logoWidth,
      marginTop: 100
    })
  }

  return (
    <AnimatedLogo
      logoFormat={logoFormat}
      style={{
        ...logoProps,
        transform: translateLogo.x.interpolate(x => `translateX(-${x}px)`)
      }}
    >
      <AnimatedCenterBrick style={centerBrickProps} logoFormat={logoFormat}>
        <AnimatedCenterImage
          src={ImgCenterBrick}
          alt="Gustavo Henrique Kich"
          style={imageProps}
        />
        <BrickIcon icon={['fas', 'user']} style={iconProps} />
      </AnimatedCenterBrick>
      {bricks.map((brick, index) => {
        return <LogoBrick key={brick.code} brick={brick} index={index} />
      })}
    </AnimatedLogo>
  )
}

LogoContainer.propTypes = {
  bricks: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      categoryType: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      iconType: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      col: PropTypes.string.isRequired,
      row: PropTypes.string.isRequired
    })
  )
}

export default LogoContainer
