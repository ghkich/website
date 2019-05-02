import React from 'react'
import PropTypes from 'prop-types'
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons'
import { animated } from 'react-spring'
import { Container, Nav, NavLink, NavLinkIcon } from './Header.style'
import useSpringStyles from './Header.spring'
import { useHeaderActiveLink, useLogoState } from '../../state/action-hooks'

const Header = ({ links }) => {
  const [headerActiveLink, setHeaderActiveLink] = useHeaderActiveLink()
  const [logoState, setLogoState] = useLogoState()

  const Anim = {
    Container: animated(Container)
  }

  const { containerStyle } = useSpringStyles(logoState)

  const handleLinkClick = link => {
    if (link !== headerActiveLink) {
      setHeaderActiveLink(link)
      setLogoState('explore')
    } else {
      setHeaderActiveLink('')
      setLogoState('construct')
    }
  }

  return (
    <Anim.Container style={containerStyle}>
      <Nav>
        {links.map(link => {
          const active = link.code === headerActiveLink
          return (
            <NavLink
              key={link.code}
              code={link.code}
              active={active}
              onClick={() => handleLinkClick(link.code)}
            >
              {active && <NavLinkIcon icon={faChevronLeft} />}
              {active ? link.description.slice(0, 3) : link.description}
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
      code: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Header
