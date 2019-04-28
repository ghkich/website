import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brickIconFontSize, brickLabelFontSize } from '../../config/sizes'
import Colors from '../../config/colors'

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  position: ${props => (props.logoState === 'explore' ? 'fixed' : 'absolute')};
  z-index: 4;
`

const Image = styled.img`
  width: 95%;
  height: 95%;
  border-radius: 50%;
  position: absolute;
`

const Icon = styled(FontAwesomeIcon)`
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
