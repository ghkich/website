import React from 'react'
import PropTypes from 'prop-types'
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons'
import {
  HeaderContainer,
  HeaderNav,
  HeaderNavLink,
  HeaderNavLinkIcon
} from './Header.style'

const Header = ({ links, activeLink, onLinkClick }) => {
  return (
    <HeaderContainer>
      <HeaderNav>
        {links.map(link => {
          const active = link.code === activeLink
          return (
            <HeaderNavLink
              key={link.code}
              code={link.code}
              active={active}
              onClick={() => onLinkClick(link.code)}
            >
              {active && <HeaderNavLinkIcon icon={faChevronLeft} />}
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
