import styled, { css } from 'styled-components'
import Colors from '../../config/colors'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${Colors.white};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
`

const HeaderNav = styled.nav`
  display: flex;
  width: 360px;
`

const setActiveLinkStyle = active => {
  if (active) {
    return css`
      text-transform: uppercase;
      font-weight: bold;
      border-top-color: ${Colors.black};
      background-color: ${Colors.gray200};
    `
  }
}

const HeaderNavLink = styled.button`
  flex: 1;
  height: 50px;
  border: none;
  border-top: 2px solid ${Colors.none};
  background-color: ${Colors.none};
  outline: none;
  cursor: pointer;
  ${props => setActiveLinkStyle(props.active)};
`

export { HeaderContainer, HeaderNav, HeaderNavLink }
