import React from 'react'
import { animated } from 'react-spring'
import { Container } from './LanguageToggle.style'
import useSpringStyles from './LanguageToggle.spring'
import { useLogoState } from '../../state/action-hooks'

const Anim = {
  Container: animated(Container)
}

const LanguageToggle = () => {
  const [logoState] = useLogoState()
  const { containerStyle } = useSpringStyles(logoState)

  return (
    <Anim.Container style={containerStyle}>
      <span>En</span>
      <span>Pt</span>
    </Anim.Container>
  )
}

export default LanguageToggle
