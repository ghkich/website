import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { BrickContainer, BrickIcon, BrickLabel } from './Brick.style'
import { useBrickProps } from './Brick.spring'

const AnimatedBrickContainer = animated(BrickContainer)

const Brick = ({ id, icon, label, active, onClick, a }) => {
  const [brickProps, brickZIndex] = useBrickProps(
    a.state,
    a.categoryType,
    a.categoryTypeActive,
    a.color,
    a.col,
    a.row,
    a.index
  )
  return (
    <AnimatedBrickContainer
      onClick={() => {
        onClick(id)
      }}
      active={active}
      style={{ ...brickProps, zIndex: brickZIndex }}
    >
      <BrickIcon icon={icon} />
      <BrickLabel color={a.color} categoryTypeActive={a.categoryTypeActive}>
        {label}
      </BrickLabel>
    </AnimatedBrickContainer>
  )
}

Brick.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  a: PropTypes.object.isRequired
}

Brick.defaultProps = {
  active: false
}

export default Brick
