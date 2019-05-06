import { useSpring } from 'react-spring'

const useSpringStyles = logoState => {
  const [containerStyle, setContainerStyle] = useSpring(() => ({
    from: {
      opacity: 0
    }
  }))

  switch (logoState) {
    case 'connect':
      setContainerStyle({
        to: {
          opacity: 0
        }
      })
      break
    case 'construct':
      setContainerStyle({
        opacity: 1
      })
      break
    case 'explore':
      setContainerStyle({
        opacity: 0
      })
      break
  }

  return { containerStyle }
}

export default useSpringStyles
