import { useSpring } from 'react-spring'
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
      fontSize: brickIconFontSize * 3.5
    }
  }))

  switch (logoState) {
    case 'connect':
      setContainerSpring({
        backgroundColor: Colors.bio
      })
      break
    case 'construct':
      setImageSpring({
        opacity: 0
      })

      setContainerSpring({
        width: brickSize,
        height: brickSize,
        top: brickSize * 2,
        left: brickSize * 2,
        borderRadius: '0%'
      })

      setIconSpring({
        fontSize: brickIconFontSize
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
      break
  }

  return { containerSpring, imageSpring, iconSpring }
}
