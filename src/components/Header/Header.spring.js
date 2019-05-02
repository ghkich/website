import { useSpring, config } from 'react-spring'

const useSpringStyles = logoState => {
  const [containerStyle, setContainerStyle] = useSpring(() => ({
    from: {
      transform: 'translateY(-55px)'
    }
  }))

  switch (logoState) {
    case 'construct':
      setContainerStyle({
        to: {
          transform: 'translateY(0px)'
        },
        delay: 500,
        config: config.slow
      })
      break
  }

  return { containerStyle }
}

export default useSpringStyles
