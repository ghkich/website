import { useSpring } from 'react-spring'
import { navWidth, logoWidth } from '../../config/sizes'

const useSpringStyles = (logoState, headerActiveLink) => {
  const [containerStyle, setContainerStyle] = useSpring(() => ({
    from: {
      width: logoWidth,
      transform: `translateY(${100}px)`
    }
  }))

  const [logoStyle, setLogoStyle] = useSpring(() => ({
    from: {
      transform: `translateX(${0}px)`,
      position: 'absolute'
    }
  }))

  switch (logoState) {
    case 'explore':
      setContainerStyle({
        width: navWidth,
        transform: `translateY(${0}px)`
      })
      break
    default:
      setContainerStyle({
        width: logoWidth,
        transform: `translateY(${100}px)`
      })
      setLogoStyle({
        transform: `translateX(${0}px)`
      })
      break
  }

  switch (headerActiveLink) {
    case 'pro':
      setLogoStyle({
        transform: `translateX(${0}px)`
      })
      break
    case 'cad':
      setLogoStyle({
        transform: `translateX(${-(navWidth / 4) * 4}px)`
      })
      break
    case 'lif':
      setLogoStyle({
        transform: `translateX(${-(navWidth / 4) * 8}px)`
      })
      break
    case 'hob':
      setLogoStyle({
        to: {
          transform: `translateX(${-(navWidth / 4) * 12}px)`
        }
      })
      break
  }

  return { containerStyle, logoStyle }
}

export default useSpringStyles
