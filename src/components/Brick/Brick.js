import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrickContainer } from './Brick.style'

const Brick = ({ id, icon, label, active, onClick }) => {
  return (
    <BrickContainer
      onClick={() => {
        onClick(id)
      }}
      active={active}
    >
      <FontAwesomeIcon className="brick-icon" icon={icon} />
      <div className="brick-label">{label}</div>
    </BrickContainer>
  )
}

Brick.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

Brick.defaultProps = {
  active: false
}

export default Brick
