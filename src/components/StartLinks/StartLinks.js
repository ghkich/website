import React from 'react'
import { animated } from 'react-spring'
import { Container } from './StartLinks.style'
import useSpringStyles from './StartLinks.spring'
import { useLogoState } from '../../state/action-hooks'

const Anim = {
  Container: animated(Container)
}

const StartLinks = () => {
  const [logoState] = useLogoState()
  const { containerStyle } = useSpringStyles(logoState)

  return (
    <Anim.Container style={containerStyle}>
      <div>Currículo</div>
      <div>Website</div>
    </Anim.Container>
  )
}

export default StartLinks
