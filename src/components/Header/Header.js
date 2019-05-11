import React from 'react'
import PropTypes from 'prop-types'
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons'
import { animated } from 'react-spring'
import {
  Container,
  Nav,
  NavLink,
  NavLinkIcon,
  NavLinkDivider
} from './Header.style'
import useSpringStyles from './Header.spring'
import {
  useHeaderActiveLink,
  useLogoState,
  useLogoActiveBrick
} from '../../state/action-hooks'

const Header = ({ links }) => {
  const [headerActiveLink, setHeaderActiveLink] = useHeaderActiveLink()
  const [logoState, setLogoState] = useLogoState()
  const [, setLogoActiveBrick] = useLogoActiveBrick()

  const Anim = {
    Container: animated(Container)
  }

  const { containerStyle } = useSpringStyles(logoState)

  const handleLinkClick = linkId => {
    setLogoActiveBrick('')
    if (linkId !== headerActiveLink) {
      setHeaderActiveLink(linkId)
      setLogoState('explore')
    } else {
      setHeaderActiveLink('')
      setLogoState('construct')
    }
  }

  return (
    <Anim.Container style={containerStyle}>
      <Nav>
        {links.map((link, index) => {
          const active = link.id === headerActiveLink
          return (
            <NavLink
              key={link.id}
              id={link.id}
              active={active}
              onClick={() => handleLinkClick(link.id)}
            >
              {active && <NavLinkIcon icon={faChevronLeft} />}
              {active ? link.description.slice(0, 3) : link.description}
              {index < links.length - 1 && <NavLinkDivider />}
            </NavLink>
          )
        })}
      </Nav>
    </Anim.Container>
  )
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Header
