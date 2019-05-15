import styled from 'styled-components'
import Colors from '../../config/colors'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 145px;
  margin: 20px auto;
  padding-top: 10px;
  border-top: 1px solid ${Colors.gray300};
`

const Icon = styled.a`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  color: ${Colors.gray700};
  font-size: 18px;
  transition: color 0.15s linear;

  @media (hover: hover) {
    :hover {
      color: ${Colors.gray900};
    }
  }
`

export { Container, Icon }
