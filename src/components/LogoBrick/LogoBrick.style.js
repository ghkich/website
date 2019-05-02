import styled from 'styled-components'
import { brickSize, brickIconFontSize } from '../../config/sizes'
import Colors from '../../config/colors'

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${brickSize}px;
  height: ${brickSize}px;
  padding: 5px 0 8px;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  transform-origin: 0% 0%;
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
  display: flex;
  flex: 1;
  align-items: center;
  color: ${Colors.white};
  font-size: ${brickIconFontSize}px;
`

const Label = styled.div`
  /* backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased; */
  font-size: 8px;
  color: ${Colors.white};
`

export { Container, Icon, Label }
