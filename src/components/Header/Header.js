import React from 'react'
import PropTypes from 'prop-types'
import { HeaderContainer, HeaderNav, HeaderNavLink } from './Header.style'

const Header = ({ links, activeLink, onLinkClick }) => {
  return (
    <HeaderContainer>
      <HeaderNav>
        {links.map(link => {
          const active = link.code === activeLink
          return (
            <HeaderNavLink
              key={link.code}
              active={active}
              onClick={() => onLinkClick(link.code)}
            >
              {active ? link.description.slice(0, 3) : link.description}
            </HeaderNavLink>
          )
        })}
      </HeaderNav>
    </HeaderContainer>
  )
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  activeLink: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired
}

export default Header
