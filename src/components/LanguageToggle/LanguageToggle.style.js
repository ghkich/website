import styled from 'styled-components'
import Colors from '../../config/colors'

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;

  h1 {
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
    font-size: 50px;
    font-weight: normal;
    letter-spacing: 2px;
    color: ${Colors.gray700};

    span {
      color: ${Colors.gray600};
    }
  }

  h2 {
    text-align: center;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 1px;
    color: ${Colors.gray600};
  }

  p {
    max-width: 500px;
    margin: 40px auto 0;
    line-height: 1.5;
    font-size: 16px;
    text-align: center;
    color: ${Colors.gray700};
  }
`

export { Container }
