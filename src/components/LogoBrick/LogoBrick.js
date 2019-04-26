import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { BrickContainer, BrickIcon, BrickLabel } from './LogoBrick.style'
import { useBrickProps } from './LogoBrick.spring'
import {
  useHeaderActiveLink,
  useLogoFormat,
  useLogoActiveBrick
} from '../../state/context'

const AnimatedBrickContainer = animated(BrickContainer)

const Brick = ({ brick, index }) => {
  const [headerActiveLink] = useHeaderActiveLink()
  const [logoFormat] = useLogoFormat()
  const [logoActiveBrick, setLogoActiveBrick] = useLogoActiveBrick()

  const [brickProps, brickZIndex] = useBrickProps(
    logoFormat,
    brick,
    headerActiveLink,
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
    <AnimatedBrickContainer
      active={logoActiveBrick === headerActiveLink}
      onClick={() => {
        handleBrickClick(brick.code)
      }}
      style={{ ...brickProps, zIndex: brickZIndex }}
    >
      <BrickIcon icon={[brick.iconType, brick.icon]} />
      <BrickLabel color={brick.color} headerActiveLink={headerActiveLink}>
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
  index: PropTypes.number.isRequired
}

export default Brick
