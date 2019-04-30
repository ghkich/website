import { useSpring } from 'react-spring'
import { navWidth, logoWidth } from '../../config/sizes'

const useSpringStyles = (logoState, headerActiveLink) => {
  const [containerStyle, setContainerStyle] = useSpring(() => ({
    from: {
      width: logoWidth,
      marginTop: 100
    }
  }))

  const [logoStyle, setLogoStyle] = useSpring(() => ({
    from: {
      left: 0,
      position: 'absolute'
    }
  }))

  switch (logoState) {
    case 'explore':
      setContainerStyle({
        width: navWidth,
        marginTop: 0
      })
      break
    default:
      setContainerStyle({
        width: logoWidth,
        marginTop: 100
      })
      setLogoStyle({
        left: 0
      })
      break
  }

  switch (headerActiveLink) {
    case 'pro':
      setLogoStyle({
        left: 0
      })
      break
    case 'cad':
      setLogoStyle({
        left: -(navWidth / 4) * 4
      })
      break
    case 'lif':
      setLogoStyle({
        left: -(navWidth / 4) * 8
      })
      break
    case 'hob':
      setLogoStyle({
        to: {
          left: -(navWidth / 4) * 12
        }
      })
      break
  }

  return { containerStyle, logoStyle }
}

export default useSpringStyles
