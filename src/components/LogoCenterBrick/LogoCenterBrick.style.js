import styled from 'styled-components'
import {
  navLogoWidthDiff,
  brickSize,
  brickIconFontSize,
  brickLabelFontSize
} from '../../config/sizes'
import Colors from '../../config/colors'

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: ${brickSize * 2 + navLogoWidthDiff / 2}px;
  left: ${brickSize * 2 + navLogoWidthDiff / 2}px;
  z-index: 4;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: 2px;
  border-radius: 50%;
  position: absolute;
`

const Icon = styled.div`
  color: ${Colors.white};
  font-size: ${brickIconFontSize}px;
`

const Label = styled.div`
  display: ${props =>
    props.categoryType === props.categoryTypeActive ? 'block' : 'none'};
  width: 180px;
  text-align: left;
  font-size: ${brickLabelFontSize}px;
  color: ${props => Colors[props.color]};
  position: absolute;
  right: -200px;
`

export { Container, Image, Icon, Label }
