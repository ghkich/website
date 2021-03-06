import ColorTransformer from 'color'
import { config, useSpring } from 'react-spring'

import Colors from '../../config/colors'
import { brickSize, navLogoWidthDiff, navWidth } from '../../config/sizes'
import { shuffleArray } from '../../utils/arrays'

const bricksCount = 16
const radius = brickSize * 2.7
const angleInterval = (2 * Math.PI) / bricksCount
const bricksIndexes = [...Array(bricksCount).keys()]
shuffleArray(bricksIndexes)

const useSpringStyles = (
  headerActiveLink,
  logoState,
  {categoryRef, color, col, row},
  index,
) => {
  const centeredXPos = brickSize * 2 + navLogoWidthDiff / 2
  const centeredYPos = brickSize * 2 + navLogoWidthDiff / 2

  const circularXPos = Math.round(
    navWidth / 2 +
      radius * Math.cos(angleInterval * bricksIndexes[index]) -
      brickSize / 2,
  )
  const circularYPos = Math.round(
    navWidth / 2 +
      radius * Math.sin(angleInterval * bricksIndexes[index]) -
      brickSize / 2,
  )

  const gShapeXPos = (col - 1) * brickSize + navLogoWidthDiff / 2
  const gShapeYPos = (row - 1) * brickSize + navLogoWidthDiff / 2

  const [containerStyle, setContainerStyle] = useSpring(() => ({
    from: {
      transform: `scale(1) translate(${centeredXPos}px, ${centeredYPos}px)`,
      borderRadius: '50%',
      backgroundColor: Colors.gray400,
      opacity: 0,
    },
  }))

  const [iconStyle, setIconStyle] = useSpring(() => ({
    from: {
      opacity: 1,
      transform: 'scale(1) translateY(0px)',
    },
  }))

  const [labelStyle, setLabelStyle] = useSpring(() => ({
    from: {
      transform: 'scale(0.95) translateY(0px)',
      opacity: 0,
    },
  }))

  switch (logoState) {
    case 'discover':
      setContainerStyle({
        to: {
          opacity: 1,
          transform: `scale(1) translate(${circularXPos}px, ${circularYPos}px)`,
        },
        config: config.gentle,
      })
      break
    case 'connect':
      setContainerStyle({
        to: {
          backgroundColor: Colors[color],
        },
        config: config.default,
      })
      break
    case 'construct':
      setContainerStyle({
        transform: `scale(1) translate(${gShapeXPos}px, ${gShapeYPos}px)`,
        borderRadius: '0%',
        backgroundColor: Colors[color],
      })
      setIconStyle({
        opacity: 1,
        transform: 'scale(1) translateY(0px)',
      })
      setLabelStyle({
        transform: 'scale(0) translateY(0px)',
        opacity: 0,
      })
      break
    case 'explore':
      setContainerStyle({
        transform: `scale(1.5) translate(${index * brickSize}px, ${0}px)`,
        opacity: 1,
        backgroundColor:
          categoryRef.id === headerActiveLink
            ? Colors[color]
            : ColorTransformer(Colors[color]).desaturate(0.85).hex(),
      })
      setIconStyle({
        opacity: categoryRef.id === headerActiveLink ? 1 : 0.3,
        transform: 'scale(0.9) translateY(-8px)',
      })
      setLabelStyle({
        transform: 'scale(0.95) translateY(-29px)',
        opacity: categoryRef.id === headerActiveLink ? 1 : 0.3,
      })
      break
  }

  return {containerStyle, iconStyle, labelStyle}
}

export default useSpringStyles
