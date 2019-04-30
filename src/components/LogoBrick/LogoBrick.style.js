import styled, { css } from 'styled-components'
import Colors from '../../config/colors'

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  z-index: 3;

  /* @media (hover: hover) {
    transition: transform 0.15s linear;

    :hover {
      transform: scale(1.2);
      box-shadow: 0 0 12px 1.2px rgba(0, 0, 0, 0.15);
      overflow: visible !important;
      z-index: 4 !important;
    }
  } */
`

const Icon = styled.div`
  color: ${Colors.white};
`

const setLabelStyle = props => {
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

const Label = styled.div`
  width: 180px;
  text-align: left;
  ${props => setLabelStyle(props)};
`

export { Container, Icon, Label }
