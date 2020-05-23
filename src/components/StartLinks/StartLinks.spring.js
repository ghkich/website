import { useSpring } from 'react-spring'

const useSpringStyles = logoState => {
  const [containerStyle, setContainerStyle] = useSpring(() => ({
    from: {
      opacity: 1
    }
  }))

  switch (logoState) {
    case 'discover':
      setContainerStyle({
        to: {
          opacity: 0
        }
      })
      break
  }

  return { containerStyle }
}

export default useSpringStyles
