import { useSpring, config } from 'react-spring'
import ColorTransformer from 'color'
import { logoWidth, navWidth, brickSize } from '../../config/sizes'
import Colors from '../../config/colors'
import { shuffleArray } from '../../utils/arrays'

const bricksCount = 16
const radius = brickSize * 2.7
const angleInterval = (2 * Math.PI) / bricksCount
const bricksIndexes = [...Array(bricksCount).keys()]
shuffleArray(bricksIndexes)

const useSpringStyles = (
  headerActiveLink,
  logoState,
  { categoryType, color, col, row },
  index
) => {
  const top = Math.round(
    logoWidth / 2 +
      radius * Math.cos(angleInterval * bricksIndexes[index]) -
      brickSize / 2
  )
  const left = Math.round(
    logoWidth / 2 +
      radius * Math.sin(angleInterval * bricksIndexes[index]) -
      brickSize / 2
  )
  const [containerStyle, setContainerStyle] = useSpring(() => ({
    to: {
      top,
      left
    },
    from: {
      width: brickSize,
      height: brickSize,
      top: brickSize * 2,
      left: brickSize * 2,
      borderRadius: '50%',
      backgroundColor: Colors.gray400,
      opacity: 1
    },
    config: config.gentle
  }))

  const [iconStyle, setIconStyle] = useSpring(() => ({
    from: {
      fontSize: 25
    }
  }))

  switch (logoState) {
    case 'connect':
      setContainerStyle({
        to: {
          backgroundColor: Colors[color]
        },
        config: config.default
      })
      break
    case 'construct':
      setContainerStyle({
        width: brickSize,
        height: brickSize,
        top: (row - 1) * brickSize,
        left: (col - 1) * brickSize,
        borderRadius: '0%',
        backgroundColor: Colors[color]
      })
      setIconStyle({
        fontSize: 25
      })
      break
    case 'explore':
      setContainerStyle({
        width: navWidth / 4,
        height: navWidth / 4,
        top: 0,
        left: index * (navWidth / 4),
        opacity: 1,
        backgroundColor:
          categoryType === headerActiveLink
            ? Colors[color]
            : ColorTransformer(Colors[color])
                .desaturate(0.85)
                .hex()
      })
      setIconStyle({
        fontSize: 32
      })
      break
  }

  return { containerStyle, iconStyle }
}

export default useSpringStyles
