import { useSpring, config } from 'react-spring'
import ColorTransformer from 'color'
import { logoWidth, brickSize } from '../../config/sizes'
import Colors from '../../config/colors'
import { shuffleArray } from '../../utils/arrays'

const bricksCount = 16
const radius = brickSize * 2.7
const angleInterval = (2 * Math.PI) / bricksCount
const bricksIndexes = [...Array(bricksCount).keys()]
shuffleArray(bricksIndexes)

export const useBrickProps = (
  state,
  categoryType,
  categoryTypeActive,
  color,
  col,
  row,
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
      top: 120,
      left: 120,
      borderRadius: '50%',
      backgroundColor: Colors.gray400,
      opacity: 1
    },
    config: config.gentle
  }))

  if (state === 'connect') {
    setBrickProps({
      to: {
        backgroundColor: Colors[color]
      },
      config: config.default
    })
  }

  if (state === 'construct') {
    setBrickProps({
      to: {
        top: (row - 1) * brickSize,
        left: (col - 1) * brickSize,
        borderRadius: '0%'
      },
      config: config.default
    })
  }

  if (state === 'explore') {
    if (categoryType === categoryTypeActive) {
      brickZIndex = 3
      setBrickProps({
        to: {
          width: 90,
          height: 90,
          top: 0,
          left: index * 90,
          opacity: 1,
          backgroundColor: Colors[color]
        },
        config: config.default
      })
    } else {
      brickZIndex = 1
      setBrickProps({
        to: {
          width: 90,
          height: 90,
          top: 0,
          left: index * 90,
          opacity: 1,
          backgroundColor: ColorTransformer(Colors[color])
            .desaturate(0.85)
            .hex()
        },
        config: config.default
      })
    }
  } else {
    if (state === 'construct') {
      setBrickProps({
        width: brickSize,
        height: brickSize,
        opacity: 1,
        backgroundColor: Colors[color]
      })
    }
  }

  return [brickProps, brickZIndex]
}
