import { useSpring, config } from 'react-spring'
import { navWidth, brickSize, brickIconFontSize } from '../../config/sizes'
import Colors from '../../config/colors'

export const useCenterBrickSpring = logoState => {
  const [containerSpring, setContainerSpring] = useSpring(() => ({
    from: {
      width: brickSize * 3.5,
      height: brickSize * 3.5,
      top: brickSize * 0.75,
      left: brickSize * 0.75,
      backgroundColor: Colors.gray400,
      borderRadius: '50%',
      opacity: 1
    }
  }))

  const [imageSpring, setImageSpring] = useSpring(() => ({
    from: {
      opacity: 1
    }
  }))

  const [iconSpring, setIconSpring] = useSpring(() => ({
    from: {
      fontSize: brickIconFontSize * 3.5,
      display: 'block'
    },
    config: config.default
  }))

  switch (logoState) {
    case 'connect':
      setContainerSpring({
        backgroundColor: Colors.bio
      })
      break
    case 'construct':
      setContainerSpring({
        width: brickSize,
        height: brickSize,
        top: brickSize * 2,
        left: brickSize * 2,
        borderRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: Colors.bio,
        boxShadow: '0 5px 10px rgba(0,0,0,0)'
      })
      setImageSpring({
        opacity: 0
      })
      setIconSpring({
        to: {
          fontSize: brickIconFontSize,
          display: 'block'
        },
        config: config.default
      })
      break
    case 'explore':
      setContainerSpring({
        width: navWidth,
        height: 20,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        top: 90,
        left: 0,
        backgroundColor: Colors.white,
        boxShadow: '0 5px 10px rgba(0,0,0,0.1)'
      })
      setIconSpring({
        to: {
          display: 'none'
        },
        config: config.default
      })
      break
  }

  return { containerSpring, imageSpring, iconSpring }
}
