import React from 'react'
import { animated } from 'react-spring'
import { Container } from './LogoText.style'
import useSpringStyles from './LogoText.spring'
import { useLogoState } from '../../state/action-hooks'

const Anim = {
  Container: animated(Container)
}

const LogoText = () => {
  const [logoState] = useLogoState()
  const { containerStyle } = useSpringStyles(logoState)

  return (
    <Anim.Container style={containerStyle}>
      <h1>
        gustavo<span>kich</span>
      </h1>
      <h2>Front-end Developer / Designer</h2>
    </Anim.Container>
  )
}

export default LogoText
