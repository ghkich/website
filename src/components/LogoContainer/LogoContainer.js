import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './LogoContainer.style'
import { importAndAddIcons } from '../../utils/fontawesome'
import { useSpring, animated, config } from 'react-spring'
import { logoWidth, navWidth } from '../../config/sizes'
import LogoBrick from '../LogoBrick/LogoBrick'
import { useLogoState, useHeaderActiveLink } from '../../state/action-hooks'
import LogoCenterBrick from '../LogoCenterBrick/LogoCenterBrick'

importAndAddIcons()

const AnimatedLogo = animated(Container)

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
  const [logoState] = useLogoState()
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

  if (logoState === 'explore') {
    setLogoProps({
      width: navWidth,
      marginTop: 0
    })
  } else {
    setLogoProps({
      width: logoWidth,
      marginTop: 100
    })
  }

  return (
    <AnimatedLogo
      logoState={logoState}
      style={{
        ...logoProps,
        transform: translateLogo.x.interpolate(x => `translateX(-${x}px)`)
      }}
    >
      <LogoCenterBrick />
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
