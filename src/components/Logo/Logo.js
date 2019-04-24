import React from 'react'
import PropTypes from 'prop-types'
import {
  LogoContainer,
  CenterBrickContainer,
  CenterBrickImage,
  BrickContainer,
  BrickIcon,
  BrickLabel
} from './Logo.style'
import { importAndAddIcons } from '../../utils/fontawesome'
import { useSpring, animated, config } from 'react-spring'
import {
  logoWidth,
  navWidth,
  brickSize,
  brickIconFontSize
} from '../../config/sizes'
import Colors from '../../config/colors'
import { useBrickProps } from './Logo.spring'

importAndAddIcons()

const AnimatedLogo = animated(LogoContainer)
const AnimatedBrick = animated(BrickContainer)
const AnimatedCenterBrick = animated(CenterBrickContainer)
const AnimatedCenterImage = animated(CenterBrickImage)

const ImgCenterBrick = require('../../images/eu.jpg')

const getValue = categoryTypeActive => {
  if (categoryTypeActive === 'cad') {
    return 90 * 4
  }
  if (categoryTypeActive === 'lif') {
    return 90 * 8
  }
  if (categoryTypeActive === 'hob') {
    return 90 * 12
  }
  return 0
}

const Logo = ({ bricks, state, categoryTypeActive, onBrickClick }) => {
  const translateLogo = useSpring({
    to: {
      x: getValue(categoryTypeActive)
    },
    config: config.default
  })
  const [logoProps, setLogoProps] = useSpring(() => ({
    from: {
      width: logoWidth,
      marginTop: 100
    }
  }))
  const [centerBrickProps, setCenterBrickProps] = useSpring(() => ({
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

  const [imageProps, setImageProps] = useSpring(() => ({
    from: {
      opacity: 1
    }
  }))

  const [iconProps, setIconProps] = useSpring(() => ({
    from: {
      fontSize: brickIconFontSize * 3.5
    }
  }))

  if (state === 'connect') {
    setCenterBrickProps({
      backgroundColor: Colors.bio
    })
  }

  if (state === 'construct') {
    setImageProps({
      opacity: 0
    })

    setCenterBrickProps({
      width: brickSize,
      height: brickSize,
      top: brickSize * 2,
      left: brickSize * 2,
      borderRadius: '0%'
    })

    setIconProps({
      fontSize: brickIconFontSize
    })
  }

  if (state === 'explore') {
    setCenterBrickProps({
      width: 90,
      height: 90,
      top: 0,
      left: -90,
      opacity: 0
    })
    setLogoProps({
      width: navWidth,
      marginTop: 0
    })
  } else {
    setCenterBrickProps({
      opacity: 1
    })
    setLogoProps({
      width: logoWidth,
      marginTop: 100
    })
  }

  return (
    <AnimatedLogo
      state={state}
      style={{
        ...logoProps,
        transform: translateLogo.x.interpolate(x => `translateX(-${x}px)`)
      }}
    >
      <AnimatedCenterBrick style={centerBrickProps} state={state}>
        <AnimatedCenterImage
          src={ImgCenterBrick}
          alt="Gustavo Henrique Kich"
          style={imageProps}
        />
        <BrickIcon icon={['fas', 'user']} style={iconProps} />
      </AnimatedCenterBrick>
      {bricks.map(
        (
          { code, categoryType, description, icon, iconType, color, row, col },
          index
        ) => {
          const [brickProps, brickZIndex] = useBrickProps(
            state,
            categoryType,
            categoryTypeActive,
            color,
            col,
            row,
            index
          )

          return (
            <AnimatedBrick
              key={code}
              onClick={() => {
                if (state === 'construct' || state === 'explore') {
                  onBrickClick(code)
                }
              }}
              style={{ ...brickProps, zIndex: brickZIndex }}
            >
              <BrickIcon icon={[iconType, icon]} />
              <BrickLabel
                color={color}
                state={state}
                categoryType={categoryType}
                categoryTypeActive={categoryTypeActive}
              >
                {description}
              </BrickLabel>
            </AnimatedBrick>
          )
        }
      )}
    </AnimatedLogo>
  )
}

Logo.propTypes = {
  bricks: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      categoryType: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      iconType: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      col: PropTypes.string.isRequired,
      row: PropTypes.string.isRequired
    })
  ),
  state: PropTypes.oneOf([
    'identify',
    'discover',
    'connect',
    'construct',
    'imagine',
    'explore'
  ]).isRequired,
  categoryTypeActive: PropTypes.string.isRequired,
  onBrickClick: PropTypes.func.isRequired
}

export default Logo
