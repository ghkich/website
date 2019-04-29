import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Container } from './LogoContainer.style'
import { useLogoSpring } from './LogoContainer.spring'
import LogoCenterBrick from '../LogoCenterBrick/LogoCenterBrick'
import LogoBrick from '../LogoBrick/LogoBrick'
import { importAndAddIcons } from '../../utils/fontawesome'
import { useLogoState, useHeaderActiveLink } from '../../state/action-hooks'

importAndAddIcons()

const AnimatedContainer = animated(Container)

const LogoContainer = ({ bricks }) => {
  const [logoState] = useLogoState()
  const [headerActiveLink] = useHeaderActiveLink()

  const { logoSpring, logoTranslateSpring } = useLogoSpring(
    logoState,
    headerActiveLink
  )

  return (
    <AnimatedContainer logoState={logoState} style={logoSpring}>
      <LogoCenterBrick />
      <animated.div
        style={{
          transform: logoTranslateSpring.x.interpolate(
            x => `translateX(-${x}px)`
          )
        }}
      >
        {bricks.map((brick, index) => {
          return <LogoBrick key={brick.code} brick={brick} index={index} />
        })}
      </animated.div>
    </AnimatedContainer>
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
