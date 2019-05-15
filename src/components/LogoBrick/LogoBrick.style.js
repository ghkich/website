import styled, { css } from 'styled-components'
import { brickSize, brickIconFontSize } from '../../config/sizes'
import Colors from '../../config/colors'

const setActiveBrickStyle = active => {
  if (active) {
    return css`
      box-shadow: inset 0 0 20px 5px rgba(0, 0, 0, 0.25);
    `
  } else {
    return css`
      @media (hover: hover) {
        :hover {
          box-shadow: inset 0 0 12px 2px rgba(0, 0, 0, 0.15);
        }
      }
    `
  }
}

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${brickSize}px;
  height: ${brickSize}px;
  padding: 0;
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  z-index: 3;
  transform-origin: 0% 0%;
  transition: box-shadow 0.15s linear;
  ${props => setActiveBrickStyle(props.active)};
`

const Icon = styled.div`
  color: ${Colors.white};
  font-size: ${brickIconFontSize}px;
`

const Label = styled.div`
  width: 100%;
  text-align: center;
  font-size: 8px;
  color: ${Colors.white};
  position: absolute;
  bottom: -20px;
`

export { Container, Icon, Label }
