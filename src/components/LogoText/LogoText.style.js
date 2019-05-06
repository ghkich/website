import styled from 'styled-components'
import Colors from '../../config/colors'

const Container = styled.div`
  width: 300px;
  margin: 40px auto 0;

  h1 {
    margin-bottom: 10px;
    text-align: center;
    font-size: 50px;
    font-weight: normal;
    letter-spacing: 2px;
    color: ${Colors.gray700};
  }

  h2 {
    text-align: center;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 1px;
    color: ${Colors.gray600};
  }
`

export { Container }
