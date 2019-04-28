import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Colors from '../../config/colors'

const BrickContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.15s linear;
  position: absolute;
  z-index: 3;

  :hover {
    transform: scale(1.2);
    box-shadow: 0 0 12px 1.2px rgba(0, 0, 0, 0.15);
    overflow: visible !important;
    z-index: 4 !important;
  }
`

const setBrickIconStyle = props => {
  if (props.categoryType === props.headerActiveLink) {
    return css`
      font-size: 32px;
    `
  }
  return css`
    font-size: 25px;
  `
}

const BrickIcon = styled(FontAwesomeIcon)`
  color: ${Colors.white};
  transition: font-size 0.3s linear;
  ${props => setBrickIconStyle(props)};
`

const setBrickLabelStyle = props => {
  if (props.categoryType === props.headerActiveLink) {
    return css`
      display: block;
      width: auto;
      color: ${Colors.white};
      margin-top: 10px;
      font-size: 12px;
      position: static;
    `
  }
  return css`
    display: none;
    color: ${props => Colors[props.color]};
    position: absolute;
    right: -200px;
  `
}

const BrickLabel = styled.div`
  width: 180px;
  text-align: left;
  ${props => setBrickLabelStyle(props)};
`

export { BrickContainer, BrickIcon, BrickLabel }
