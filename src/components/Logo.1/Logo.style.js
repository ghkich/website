import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  navWidth,
  logoWidth,
  brickSize,
  brickIconFontSize,
  brickLabelFontSize
} from '../../config/sizes'
import Colors from '../../config/colors'
import { shuffleArray } from '../../utils/arrays'

const discoverTransitionDuration = 0.5
const connectTransitionDuration = 0.3
const constructTransitionDuration = 0.6
const exploreTransitionDuration = 0.3

const setLogoStyleByState = state => {
  switch (state) {
    case 'explore':
      return css`
        width: ${navWidth}px;
        margin: 0 auto;
      `
    default:
      return css`
        margin: 100px auto;
      `
  }
}

const LogoContainer = styled.div`
  width: ${logoWidth}px;
  height: ${logoWidth}px;
  position: relative;
  transition: margin ${exploreTransitionDuration}s linear,
    width ${exploreTransitionDuration}s linear;
  ${props => setLogoStyleByState(props.state)};
`

const BrickSharedCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 0.15s linear, filter 0.15s linear;
  position: absolute;
  z-index: 3;
`

const setCenterBrickStyleByState = state => {
  switch (state) {
    case 'connect':
      return css`
        border-radius: 50%;
        width: ${3.5 * brickSize}px;
        height: ${3.5 * brickSize}px;
        top: ${brickSize * 0.75}px;
        left: ${brickSize * 0.75}px;
        transition: background-color ${connectTransitionDuration}s linear;
        background-color: ${Colors.bio};
      `
    case 'construct':
      return css`
        transition-property: top, left, width, height, border-radius, opacity;
        transition-duration: ${constructTransitionDuration}s;
        transition-timing-function: linear;
        border-radius: 0;
        width: ${brickSize}px;
        height: ${brickSize}px;
        top: ${brickSize * 2}px;
        left: ${brickSize * 2}px;
      `
    case 'explore':
      return css`
        transition: opacity ${exploreTransitionDuration}s linear;
        opacity: 0;
        width: ${brickSize}px;
        height: ${brickSize}px;
        top: ${brickSize * 2}px;
        left: ${brickSize * 2}px;
      `
    default:
      return css`
        border-radius: 50%;
        width: ${3.5 * brickSize}px;
        height: ${3.5 * brickSize}px;
        background-color: ${Colors.gray400};
        top: ${brickSize * 0.75}px;
        left: ${brickSize * 0.75}px;
        z-index: 4;
      `
  }
}

const CenterBrickContainer = styled.button`
  ${BrickSharedCss};
  background-color: ${Colors.bio};
  ${props => setCenterBrickStyleByState(props.state)};
`

const setCenterImageStyleByState = state => {
  switch (state) {
    case 'construct':
      return css`
        transition-property: width, height, border-radius, opacity;
        transition-duration: ${constructTransitionDuration}s;
        transition-timing-function: linear;
        border-radius: 0;
        opacity: 0;
        width: ${brickSize}px;
        height: ${brickSize}px;
      `
    case 'explore':
      return css`
        display: none;
      `
    default:
      return css`
        border-radius: 50%;
        width: ${3.5 * brickSize * 0.95}px;
        height: ${3.5 * brickSize * 0.95}px;
      `
  }
}

const CenterBrickImage = styled.img`
  width: ${brickSize}px;
  position: absolute;
  ${props => setCenterImageStyleByState(props.state)};
`

const setBrickStyleByCategoryActive = props => {
  if (props.categoryType === props.categoryTypeActive) {
    return css`
      width: 90px;
      height: 90px;
      top: 0;
      left: ${(props.position.index % 4) * 90}px;
    `
  } else {
    return css`
      opacity: 0;
      top: ${(props.position.row - 1) * brickSize}px;
      left: ${(props.position.col - 1) * brickSize}px;
    `
  }
}

const bricksCount = 16
const radius = brickSize * 2.7
const angleInterval = (2 * Math.PI) / bricksCount
const bricksIndexes = [...Array(bricksCount).keys()]
shuffleArray(bricksIndexes)

const setBrickStyleByState = props => {
  const top = Math.round(
    logoWidth / 2 +
      radius * Math.cos(angleInterval * bricksIndexes[props.position.index]) -
      brickSize / 2
  )
  const left = Math.round(
    logoWidth / 2 +
      radius * Math.sin(angleInterval * bricksIndexes[props.position.index]) -
      brickSize / 2
  )
  switch (props.state) {
    case 'discover':
      return css`
        border-radius: 50%;
        background-color: ${Colors.gray400};
        transition-property: top, left;
        transition-duration: ${discoverTransitionDuration}s;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        top: ${top}px;
        left: ${left}px;
      `
    case 'connect':
      return css`
        border-radius: 50%;
        transition: background-color 0.3s linear;
        background-color: ${Colors[props.color]};
        top: ${top}px;
        left: ${left}px;
      `
    case 'construct':
      return css`
        background-color: ${Colors[props.color]};
        transition: transform 0.15s ease,
          top ${constructTransitionDuration}s linear,
          left ${constructTransitionDuration}s linear,
          opacity ${constructTransitionDuration}s linear,
          border-radius ${constructTransitionDuration}s linear;
        top: ${(props.position.row - 1) * brickSize}px;
        left: ${(props.position.col - 1) * brickSize}px;
      `
    case 'explore':
      return css`
        background-color: ${Colors[props.color]};
        transition-property: width, height, opacity, top, left;
        transition-duration: ${exploreTransitionDuration}s;
        transition-timing-function: linear;
        ${setBrickStyleByCategoryActive(props)};
      `
    default:
      return css`
        border-radius: 50%;
        background-color: ${Colors.gray400};
        top: ${brickSize * 2}px;
        left: ${brickSize * 2}px;
      `
  }
}

const BrickContainer = styled.button`
  ${BrickSharedCss};
  width: ${brickSize}px;
  height: ${brickSize}px;
  overflow: hidden;
  ${props => setBrickStyleByState(props)};

  :hover {
    transform: scale(1.2);
    box-shadow: 0 0 12px 1.2px rgba(0, 0, 0, 0.15);
    overflow: visible !important;
    z-index: 4;
  }
`

const setCenterIconStyleByState = state => {
  switch (state) {
    case 'connect':
      return css`
        font-size: ${brickIconFontSize * 3.5}px;
      `
    case 'construct':
      return css`
        transition: all ${constructTransitionDuration}s linear;
        font-size: ${brickIconFontSize}px;
      `
    default:
      return css`
        font-size: ${brickIconFontSize}px;
      `
  }
}

const BrickIcon = styled(FontAwesomeIcon)`
  color: ${Colors.white};
  ${props => setCenterIconStyleByState(props.state)};
`

const setLabelStyleByState = props => {
  switch (props.state) {
    case 'explore':
      return css`
        margin-top: 12px;
        color: ${Colors.white};
        font-size: ${brickLabelFontSize * 1.1}px;
      `
    default:
      return css`
        width: 180px;
        text-align: left;
        font-size: ${brickLabelFontSize}px;
        color: ${props => Colors[props.color]};
        position: absolute;
        right: -200px;
      `
  }
}

const BrickLabel = styled.div`
  display: ${props =>
    props.categoryType === props.categoryTypeActive ? 'block' : 'none'};
  ${props => setLabelStyleByState(props)};
`

export {
  LogoContainer,
  CenterBrickContainer,
  CenterBrickImage,
  BrickContainer,
  BrickIcon,
  BrickLabel
}
