import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { BrickContainer, BrickIcon, BrickLabel } from './LogoBrick.style'
import { useBrickProps } from './LogoBrick.spring'

const AnimatedBrickContainer = animated(BrickContainer)

const Brick = ({ brick, logoState, categoryTypeActive, active, index }) => {
  const [brickProps, brickZIndex] = useBrickProps(
    logoState,
    brick,
    categoryTypeActive,
    index
  )
  return (
    <AnimatedBrickContainer
      active={active}
      onClick={() => {}}
      style={{ ...brickProps, zIndex: brickZIndex }}
    >
      <BrickIcon icon={[brick.iconType, brick.icon]} />
      <BrickLabel color={brick.color} categoryTypeActive={categoryTypeActive}>
        {brick.label}
      </BrickLabel>
    </AnimatedBrickContainer>
  )
}

Brick.propTypes = {
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
  logoState: PropTypes.string.isRequired,
  categoryTypeActive: PropTypes.string.isRequired,
  active: PropTypes.bool,
  index: PropTypes.number.isRequired
}

Brick.defaultProps = {
  active: false
}

export default Brick
