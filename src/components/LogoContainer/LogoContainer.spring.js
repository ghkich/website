import { useSpring, config } from 'react-spring'
import { navWidth, logoWidth } from '../../config/sizes'

export const useLogoSpring = (logoState, headerActiveLink) => {
  const getValue = headerActiveLink => {
    if (headerActiveLink === 'cad') {
      return (navWidth / 4) * 4
    }
    if (headerActiveLink === 'lif') {
      return (navWidth / 4) * 8
    }
    if (headerActiveLink === 'hob') {
      return (navWidth / 4) * 12
    }
    return 0
  }

  const logoTranslateSpring = useSpring({
    to: {
      x: getValue(headerActiveLink)
    },
    config: config.default
  })

  const [logoSpring, setLogoSpring] = useSpring(() => ({
    from: {
      width: logoWidth,
      marginTop: 100
    }
  }))

  if (logoState === 'explore') {
    setLogoSpring({
      width: navWidth,
      marginTop: 0
    })
  } else {
    setLogoSpring({
      width: logoWidth,
      marginTop: 100
    })
  }

  return { logoSpring, logoTranslateSpring }
}
