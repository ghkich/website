import React from 'react'
import PropTypes from 'prop-types'
import {
  LogoContainer,
  CenterBrickContainer,
  CenterBrickImage,
  BrickContainer,
  BrickIcon,
  BrickLabel
} from './Logo.style'
import {
  faUser,
  faBriefcase,
  faCode,
  faLightbulb,
  faNewspaper,
  faGraduationCap,
  faBook,
  faRss,
  faHeartbeat,
  faLeaf,
  faRocket,
  faGem,
  faPencil,
  faGamepad,
  faFilmAlt,
  faPlane
} from '@fortawesome/pro-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faUser,
  faBriefcase,
  faCode,
  faLightbulb,
  faNewspaper,
  faGraduationCap,
  faBook,
  faRss,
  faHeartbeat,
  faLeaf,
  faRocket,
  faGem,
  faPencil,
  faGamepad,
  faFilmAlt,
  faPlane,
  faYoutube
)

const ImgCenterBrick = require('../../images/eu.jpg')

const Logo = ({ bricks, state, categoryTypeActive, onBrickClick }) => {
  return (
    <LogoContainer state={state}>
      <CenterBrickContainer state={state}>
        <CenterBrickImage
          src={ImgCenterBrick}
          alt="Gustavo Henrique Kich"
          state={state}
        />
        <BrickIcon icon={['fas', 'user']} state={state} />
      </CenterBrickContainer>
      {bricks.map(
        (
          { code, categoryType, description, icon, iconType, color, col, row },
          index
        ) => (
          <BrickContainer
            key={code}
            categoryType={categoryType}
            categoryTypeActive={categoryTypeActive}
            color={color}
            position={{ col, row, index }}
            onClick={() => {
              if (state === 'construct' || state === 'explore') {
                onBrickClick(code)
              }
            }}
            state={state}
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
          </BrickContainer>
        )
      )}
    </LogoContainer>
  )
}

Logo.propTypes = {
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
  ),
  state: PropTypes.oneOf([
    'identify',
    'discover',
    'connect',
    'construct',
    'imagine',
    'explore'
  ]).isRequired,
  categoryTypeActive: PropTypes.string.isRequired,
  onBrickClick: PropTypes.func.isRequired
}

export default Logo
