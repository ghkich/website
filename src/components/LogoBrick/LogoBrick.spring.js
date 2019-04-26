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

export const useBrickProps = (
  logoState,
  { categoryType, color, col, row },
  categoryTypeActive,
  index
) => {
  let brickZIndex = 1

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
  const [brickProps, setBrickProps] = useSpring(() => ({
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

  if (logoState === 'connect') {
    setBrickProps({
      to: {
        backgroundColor: Colors[color]
      },
      config: config.default
    })
  } else if (logoState === 'construct') {
    setBrickProps({
      to: {
        top: (row - 1) * brickSize,
        left: (col - 1) * brickSize,
        borderRadius: '0%'
      },
      config: config.default
    })
  } else if (logoState === 'explore') {
    if (categoryType === categoryTypeActive) {
      setBrickProps({
        to: {
          width: navWidth / 4,
          height: navWidth / 4,
          top: 0,
          left: index * (navWidth / 4),
          opacity: 1,
          backgroundColor: Colors[color]
        },
        config: config.default
      })
      brickZIndex = 3
    } else {
      setBrickProps({
        to: {
          width: navWidth / 4,
          height: navWidth / 4,
          top: 0,
          left: index * (navWidth / 4),
          opacity: 1,
          backgroundColor: ColorTransformer(Colors[color])
            .desaturate(0.85)
            .hex()
        },
        config: config.default
      })
      brickZIndex = 1
    }
  } else {
    setBrickProps({
      width: brickSize,
      height: brickSize,
      opacity: 1
    })
  }

  return [brickProps, brickZIndex]
}
