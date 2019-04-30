import styled from 'styled-components'
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

const Label = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
  color: ${Colors.white};
`

export { Container, Icon, Label }
