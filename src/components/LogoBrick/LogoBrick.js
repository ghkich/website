import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Icon, Label } from './LogoBrick.style'
import useSpringStyles from './LogoBrick.spring'
import {
  useHeaderActiveLink,
  useLogoState,
  useLogoActiveBrick
} from '../../state/action-hooks'

const Anim = {
  Container: animated(Container),
  Icon: animated(Icon)
}

const LogoBrick = ({ brick, index }) => {
  const [headerActiveLink] = useHeaderActiveLink()
  const [logoState] = useLogoState()
  const [logoActiveBrick, setLogoActiveBrick] = useLogoActiveBrick()

  const { containerStyle, iconStyle } = useSpringStyles(
    headerActiveLink,
    logoState,
    brick,
    index
  )

  const handleBrickClick = brick => {
    if (brick !== logoActiveBrick) {
      setLogoActiveBrick(brick)
    } else {
      setLogoActiveBrick('')
    }
  }

  return (
    <Anim.Container
      active={brick.category === logoActiveBrick}
      onClick={() => handleBrickClick(brick.code)}
      style={containerStyle}
    >
      <Anim.Icon style={iconStyle}>
        <FontAwesomeIcon icon={[brick.iconType, brick.icon]} />
      </Anim.Icon>
      <Label
        color={brick.color}
        categoryType={brick.categoryType}
        headerActiveLink={headerActiveLink}
      >
        {brick.description}
      </Label>
    </Anim.Container>
  )
}

LogoBrick.propTypes = {
  brick: PropTypes.shape({
    code: PropTypes.string.isRequired,
    categoryType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    col: PropTypes.string.isRequired,
    row: PropTypes.string.isRequired
  }),
  index: PropTypes.number.isRequired
}

export default LogoBrick
