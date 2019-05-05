import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ColorTransformer from 'color'
import Colors from '../../config/colors'
import { navWidth } from '../../config/sizes'

const Container = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${Colors.white};
  border-top: 2px solid ${Colors.gray300};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
`

const Nav = styled.nav`
  display: flex;
  width: ${navWidth}px;
`

const setActiveLinkStyle = (active, code) => {
  if (active) {
    const desaturatedColor = ColorTransformer(Colors[code])
      .desaturate(0.5)
      .hex()

    return css`
      border-top-color: ${Colors[code]};
      background-color: ${Colors.gray200};
      text-transform: uppercase;
      font-weight: bold;
      color: ${desaturatedColor};
    `
  } else {
    return css`
      @media (hover: hover) {
        :hover {
          border-top-color: ${Colors.gray400};
          color: ${Colors.gray800};
          background-color: ${Colors.gray100};
        }
      }
    `
  }
}

const NavLink = styled.button`
  flex: 1;
  height: 55px;
  border: none;
  margin-top: -2px;
  border-top: 2px solid ${Colors.gray300};
  background-color: ${Colors.none};
  font-size: 14px;
  color: ${Colors.gray700};
  outline: none;
  cursor: pointer;
  transition-property: border-color, color, background-color;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  ${props => setActiveLinkStyle(props.active, props.code)};
`

const NavLinkIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  font-size: 12px;
  color: ${Colors.gray600};
`

export { Container, Nav, NavLink, NavLinkIcon }
