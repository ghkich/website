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

const useSpringStyles = (
  headerActiveLink,
  logoState,
  { categoryType, color, col, row },
  index
) => {
  const circularXPos = Math.round(
    logoWidth / 2 +
      radius * Math.cos(angleInterval * bricksIndexes[index]) -
      brickSize / 2
  )
  const circularYPos = Math.round(
    logoWidth / 2 +
      radius * Math.sin(angleInterval * bricksIndexes[index]) -
      brickSize / 2
  )
  const gShapeXPos = (col - 1) * brickSize
  const gShapeYPos = (row - 1) * brickSize

  const [containerStyle, setContainerStyle] = useSpring(() => ({
    to: {
      transform: `scale(1) translate(${circularXPos}px, ${circularYPos}px)`
    },
    from: {
      transform: `scale(1) translate(${brickSize * 2}px, ${brickSize * 2}px)`,
      borderRadius: '50%',
      backgroundColor: Colors.gray400,
      opacity: 1
    },
    config: config.gentle
  }))

  const [iconStyle, setIconStyle] = useSpring(() => ({
    from: {
      opacity: 1,
      transform: 'scale(1)'
    }
  }))

  const [labelStyle, setLabelStyle] = useSpring(() => ({
    from: {
      height: 0,
      transform: 'scale(0)',
      opacity: 0
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
        transform: `scale(1) translate(${gShapeXPos}px, ${gShapeYPos}px)`,
        borderRadius: '0%',
        backgroundColor: Colors[color]
      })
      setIconStyle({
        opacity: 1,
        transform: 'scale(1)'
      })
      setLabelStyle({
        height: 0,
        transform: 'scale(0)',
        opacity: 1
      })
      break
    case 'explore':
      setContainerStyle({
        transform: `scale(1.5) translate(${index * brickSize}px, ${0}px)`,
        opacity: 1,
        backgroundColor:
          categoryType === headerActiveLink
            ? Colors[color]
            : ColorTransformer(Colors[color])
                .desaturate(0.85)
                .hex()
      })
      setIconStyle({
        opacity: categoryType === headerActiveLink ? 1 : 0.3,
        transform: 'scale(0.9)'
      })
      setLabelStyle({
        to: {
          height: 'auto',
          transform: 'scale(0.95)',
          opacity: categoryType === headerActiveLink ? 1 : 0.3
        },
        delay: 100
      })
      break
  }

  return { containerStyle, iconStyle, labelStyle }
}

export default useSpringStyles
