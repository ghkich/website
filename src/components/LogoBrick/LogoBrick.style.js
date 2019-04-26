import styled from 'styled-components'
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

const BrickIcon = styled(FontAwesomeIcon)`
  color: ${Colors.white};
  font-size: 25px;
`

const BrickLabel = styled.div`
  display: ${props =>
    props.categoryType === props.headerActiveLink ? 'block' : 'none'};
  width: 180px;
  text-align: left;
  color: ${props => Colors[props.color]};
  position: absolute;
  right: -200px;
`

export { BrickContainer, BrickIcon, BrickLabel }
