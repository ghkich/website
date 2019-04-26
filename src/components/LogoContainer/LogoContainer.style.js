import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  logoWidth,
  brickSize,
  brickIconFontSize,
  brickLabelFontSize
} from '../../config/sizes'
import Colors from '../../config/colors'

const Container = styled.div`
  width: ${logoWidth}px;
  height: ${logoWidth}px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

const BrickSharedCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  z-index: 3;
`

const CenterBrickContainer = styled.button`
  ${BrickSharedCss};
  display: ${props => (props.format === 'explore' ? 'none' : 'flex')};
  z-index: 4;
`

const CenterBrickImage = styled.img`
  width: 95%;
  height: 95%;
  border-radius: 50%;
  position: absolute;
`

const BrickContainer = styled.button`
  ${BrickSharedCss};
  width: ${brickSize}px;
  height: ${brickSize}px;
  overflow: hidden;
  transition: transform 0.15s linear;

  :hover {
    transform: scale(1.2);
    box-shadow: 0 0 12px 1.2px rgba(0, 0, 0, 0.15);
    overflow: visible !important;
    z-index: 4 !important;
  }
`

const BrickIcon = styled(FontAwesomeIcon)`
  color: ${Colors.white};
  font-size: ${brickIconFontSize}px;
`

const BrickLabel = styled.div`
  display: ${props =>
    props.categoryType === props.categoryTypeActive ? 'block' : 'none'};
  width: 180px;
  text-align: left;
  font-size: ${brickLabelFontSize}px;
  color: ${props => Colors[props.color]};
  position: absolute;
  right: -200px;
`

export {
  Container,
  CenterBrickContainer,
  CenterBrickImage,
  BrickContainer,
  BrickIcon,
  BrickLabel
}
