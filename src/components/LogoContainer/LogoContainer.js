import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Container, Logo } from './LogoContainer.style'
import useSpringStyles from './LogoContainer.spring'
import LogoCenterBrick from '../LogoCenterBrick/LogoCenterBrick'
import LogoBrick from '../LogoBrick/LogoBrick'
import { importAndAddIcons } from '../../utils/fontawesome'
import { useLogoState, useHeaderActiveLink } from '../../state/action-hooks'

importAndAddIcons()

const Anim = {
  Container: animated(Container),
  Logo: animated(Logo)
}

const LogoContainer = ({ bricks }) => {
  const [logoState] = useLogoState()
  const [headerActiveLink] = useHeaderActiveLink()

  const { containerStyle, logoStyle } = useSpringStyles(
    logoState,
    headerActiveLink
  )

  return (
    <Anim.Container style={containerStyle}>
      <LogoCenterBrick />
      <Anim.Logo style={logoStyle}>
        {bricks.map((brick, index) => {
          return <LogoBrick key={brick.code} brick={brick} index={index} />
        })}
      </Anim.Logo>
    </Anim.Container>
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
