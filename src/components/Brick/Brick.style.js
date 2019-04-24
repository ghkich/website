import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Colors from '../../config/colors'

const BrickContainer = styled.button`
  display: flex;
  width: 60px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${props => Colors[props.color]};
  color: ${Colors.black};
  outline: none;
  cursor: pointer;
  transition: transform 0.15s linear, filter 0.15s linear;
  overflow: hidden;
  position: absolute;
  top: ${props => props.position.top};
  left: ${props => props.position.left};
  z-index: 3;

  :hover {
    transform: scale(1.2);
    box-shadow: 0 0 12px 1.2px rgba(0, 0, 0, 0.15);
    overflow: visible !important;
    z-index: 4;
  }
`

const BrickIcon = styled(FontAwesomeIcon)`
  color: ${Colors.white};
  font-size: 25px;
`

const BrickLabel = styled.div`
  width: 180px;
  text-align: left;
  font-size: 12px;
  color: ${props => Colors[props.color]};
  position: absolute;
  right: -200px;
`

export { BrickContainer, BrickIcon, BrickLabel }
