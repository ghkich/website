import { useSpring, config } from 'react-spring'
import { navWidth, logoWidth } from '../../config/sizes'

export const useLogoSpring = (logoState, headerActiveLink) => {
  const getValue = headerActiveLink => {
    if (headerActiveLink === 'cad') {
      return 90 * 4
    }
    if (headerActiveLink === 'lif') {
      return 90 * 8
    }
    if (headerActiveLink === 'hob') {
      return 90 * 12
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
