import { useSpring } from 'react-spring'
import { navWidth, navLogoWidthDiff, brickSize } from '../../config/sizes'
import Colors from '../../config/colors'

const useSpringStyles = logoState => {
  const [containerStyle, setContainerStyle] = useSpring(() => ({
    from: {
      width: brickSize,
      height: brickSize,
      transform: 'scale(3.5) translate(0px,0px)',
      transformOrigin: '50% 50%',
      backgroundColor: Colors.gray400,
      borderTopRightRadius: brickSize / 2,
      borderTopLeftRadius: brickSize / 2,
      borderBottomRightRadius: brickSize / 2,
      borderBottomLeftRadius: brickSize / 2,
      opacity: 1
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
        boxShadow: '0 5px 10px rgba(0,0,0,0)'
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
          height: 25,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          transform: `scale(1) translate(-${navWidth / 2 -
            navLogoWidthDiff / 2}, -60px)`,
          backgroundColor: Colors.white,
          boxShadow: '0 5px 10px rgba(0,0,0,0.1)'
        },
        delay: 175
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
