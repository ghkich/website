import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { BrickContainer, BrickIcon, BrickLabel } from './LogoBrick.style'
import { useBrickSpring } from './LogoBrick.spring'
import {
  useHeaderActiveLink,
  useLogoFormat,
  useLogoActiveBrick
} from '../../state/action-hooks'

const AnimatedBrickContainer = animated(BrickContainer)

const LogoBrick = ({ brick, index }) => {
  const [headerActiveLink] = useHeaderActiveLink()
  const [logoFormat] = useLogoFormat()
  const [logoActiveBrick, setLogoActiveBrick] = useLogoActiveBrick()

  const brickSpring = useBrickSpring(logoFormat, brick, headerActiveLink, index)

  const handleBrickClick = brick => {
    if (brick !== logoActiveBrick) {
      setLogoActiveBrick(brick)
    } else {
      setLogoActiveBrick('')
    }
  }

  return (
    <AnimatedBrickContainer
      active={brick.category === logoActiveBrick}
      onClick={() => handleBrickClick(brick.code)}
      style={brickSpring}
    >
      <BrickIcon icon={[brick.iconType, brick.icon]} />
      <BrickLabel color={brick.color} headerActiveLink={headerActiveLink}>
        {brick.label}
      </BrickLabel>
    </AnimatedBrickContainer>
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
