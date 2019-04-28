import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { BrickContainer, BrickIcon, BrickLabel } from './LogoBrick.style'
import { useBrickSpring } from './LogoBrick.spring'
import {
  useHeaderActiveLink,
  useLogoState,
  useLogoActiveBrick
} from '../../state/action-hooks'

const AnimatedBrickContainer = animated(BrickContainer)

const LogoBrick = ({ brick, index }) => {
  const [headerActiveLink] = useHeaderActiveLink()
  const [logoState] = useLogoState()
  const [logoActiveBrick, setLogoActiveBrick] = useLogoActiveBrick()

  const brickSpring = useBrickSpring(logoState, brick, headerActiveLink, index)

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
      <BrickIcon
        icon={[brick.iconType, brick.icon]}
        categoryType={brick.categoryType}
        headerActiveLink={headerActiveLink}
      />
      <BrickLabel
        color={brick.color}
        categoryType={brick.categoryType}
        headerActiveLink={headerActiveLink}
      >
        {brick.description}
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
