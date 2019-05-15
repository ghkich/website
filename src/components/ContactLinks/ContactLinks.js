import React from 'react'
import { animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Icon } from './ContactLinks.style'
import useSpringStyles from './ContactLinks.spring'
import { useLogoState } from '../../state/action-hooks'

const Anim = {
  Container: animated(Container)
}

const ContactLinks = () => {
  const [logoState] = useLogoState()
  const { containerStyle } = useSpringStyles(logoState)

  const socials = [
    {
      id: 'twitter',
      name: 'Twitter',
      href: 'https://www.twitter.com/ghkich'
    },
    {
      id: 'github',
      name: 'Gibhub',
      href: 'https://www.github.com/ghkich'
    },
    {
      id: 'behance',
      name: 'Behance',
      href: 'https://www.behance.com/ghkich'
    },
    {
      id: 'whatsapp',
      name: 'Whatsapp',
      href: 'https://www.github.com/ghkich'
    }
  ]

  return (
    <Anim.Container style={containerStyle}>
      {socials.map(social => (
        <Icon key={social.id} href={social.href} target="_blank">
          <FontAwesomeIcon icon={['fab', social.id]} />
        </Icon>
      ))}
      <Icon href="mailto:gh.kich@gmail.com">
        <FontAwesomeIcon icon={['fas', 'envelope']} />
      </Icon>
    </Anim.Container>
  )
}

export default ContactLinks
