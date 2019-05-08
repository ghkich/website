import { useSpring } from 'react-spring'
import ColorTransformer from 'color'
import { navWidth, navLogoWidthDiff, brickSize } from '../../config/sizes'
import Colors from '../../config/colors'

const useSpringStyles = logoState => {
  const [containerStyle, setContainerStyle] = useSpring(() => ({
    from: {
      width: brickSize,
      height: brickSize,
      transform: 'scale(3.8) translate(0px,0px)',
      transformOrigin: '50% 50%',
      backgroundColor: ColorTransformer(Colors.gray400)
        .alpha(0.75)
        .rgb()
        .string(),
      borderTopRightRadius: brickSize / 2,
      borderTopLeftRadius: brickSize / 2,
      borderBottomRightRadius: brickSize / 2,
      borderBottomLeftRadius: brickSize / 2,
      opacity: 1,
      borderWidth: 3
    }
  }))

  const [imageStyle, setImageStyle] = useSpring(() => ({
    from: {
      opacity: 1
    }
  }))

  const [iconStyle, setIconStyle] = useSpring(() => ({
    from: {
      display: 'block',
      opacity: 0
    }
  }))

  switch (logoState) {
    case 'connect':
      setContainerStyle({
        backgroundColor: Colors.bio
      })
      break
    case 'construct':
      setContainerStyle({
        width: brickSize,
        height: brickSize,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        transform: 'scale(1) translate(0px, 0px)',
        backgroundColor: Colors.bio,
        boxShadow: '0 5px 10px rgba(0,0,0,0)',
        borderWidth: 0
      })
      setImageStyle({
        opacity: 0
      })
      setIconStyle({
        display: 'block',
        opacity: 1
      })
      break
    case 'explore':
      setContainerStyle({
        to: {
          width: navWidth,
          height: 16,
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
          transform: `scale(1) translate(-${navWidth / 2 -
            navLogoWidthDiff / 2}, -60px)`,
          backgroundColor: Colors.white,
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        },
        delay: 150
      })
      setIconStyle({
        to: {
          display: 'none'
        },
        delay: 50
      })
      break
  }

  return { containerStyle, imageStyle, iconStyle }
}

export default useSpringStyles
