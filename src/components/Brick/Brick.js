import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrickContainer } from './Brick.style'
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
      <FontAwesomeIcon className="brick-icon" icon={icon} />
      <div className="brick-label">{label}</div>
    </AnimatedBrickContainer>
  )
}

{
  /* <AnimatedBrick
              key={code}
              onClick={() => {
                if (state === 'construct' || state === 'explore') {
                  onBrickClick(code)
                }
              }}
              style={{ ...brickProps, zIndex: brickZIndex }}
            >
              <BrickIcon icon={[iconType, icon]} />
              <BrickLabel
                color={color}
                state={state}
                categoryType={categoryType}
                categoryTypeActive={categoryTypeActive}
              >
                {description}
              </BrickLabel>
            </AnimatedBrick> */
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
