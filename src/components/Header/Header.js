import React from 'react'
import PropTypes from 'prop-types'
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons'
import {
  HeaderContainer,
  HeaderNav,
  HeaderNavLink,
  HeaderNavLinkIcon
} from './Header.style'
import { useHeaderActiveLink, useLogoState } from '../../state/action-hooks'

const Header = ({ links }) => {
  const [headerActiveLink, setHeaderActiveLink] = useHeaderActiveLink()
  const [, setLogoState] = useLogoState()

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
    <HeaderContainer>
      <HeaderNav>
        {links.map(link => {
          const active = link.code === headerActiveLink
          return (
            <HeaderNavLink
              key={link.code}
              code={link.code}
              active={active}
              onClick={() => handleLinkClick(link.code)}
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
  ).isRequired
}

export default Header
