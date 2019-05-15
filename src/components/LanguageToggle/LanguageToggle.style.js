import styled from 'styled-components'
import Colors from '../../config/colors'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  height: 38px;
  margin: 50px auto;
  padding: 4px;
  border-radius: 18px;
  background-color: ${Colors.gray300};
  cursor: pointer;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-transform: uppercase;
    color: ${Colors.gray700};
    font-size: 13px;

    &:first-child {
      background-color: ${Colors.white};
    }
  }
`

export { Container }
