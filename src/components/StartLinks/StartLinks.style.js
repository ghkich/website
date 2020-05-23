import styled from 'styled-components'
import Colors from '../../config/colors'

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 180px;
  margin: 0 auto 35px;
  margin-top: -25px;
  color: ${Colors.gray700};
  cursor: pointer;
  position: relative;
  z-index: 10000;
`

export { Container }
