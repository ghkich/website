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
  Icon: animated(Icon),
  Label: animated(Label)
}

const LogoBrick = ({ brick, index }) => {
  const [headerActiveLink, setHeaderActiveLink] = useHeaderActiveLink()
  const [logoState, setLogoState] = useLogoState()
  const [logoActiveBrick, setLogoActiveBrick] = useLogoActiveBrick()

  const { containerStyle, iconStyle, labelStyle } = useSpringStyles(
    headerActiveLink,
    logoState,
    brick,
    index
  )

  const handleBrickClick = (brickId, linkId) => {
    if (brickId !== logoActiveBrick) {
      setLogoState('explore')
      setHeaderActiveLink(linkId)
      setLogoActiveBrick(brickId)
    } else {
      setLogoState('construct')
      setHeaderActiveLink('')
      setLogoActiveBrick('')
    }
  }

  return (
    <Anim.Container
      active={brick.id === logoActiveBrick}
      onClick={() => handleBrickClick(brick.id, brick.categoryRef.id)}
      style={containerStyle}
    >
      <Anim.Icon style={iconStyle}>
        <FontAwesomeIcon icon={[brick.iconType, brick.icon]} />
      </Anim.Icon>
      <Anim.Label style={labelStyle}>{brick.description}</Anim.Label>
    </Anim.Container>
  )
}

LogoBrick.propTypes = {
  brick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    categoryRef: PropTypes.shape({ id: PropTypes.string.isRequired })
      .isRequired,
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
