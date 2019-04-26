import { useContextState } from './provider'
import { types } from './reducer'

export const useLogoFormat = () => {
  const [{ logoFormat }, dispatch] = useContextState()
  return [
    logoFormat,
    newLogoForm =>
      dispatch({
        type: types.LOGO_FORMAT_CHANGED,
        logoFormat: newLogoForm
      })
  ]
}

export const useLogoActiveBrick = () => {
  const [{ logoActiveBrick }, dispatch] = useContextState()
  return [
    logoActiveBrick,
    newActiveBrick =>
      dispatch({
        type: types.LOGO_ACTIVE_BRICK_CHANGED,
        logoActiveBrick: newActiveBrick
      })
  ]
}

export const useHeaderActiveLink = () => {
  const [{ headerActiveLink }, dispatch] = useContextState()
  return [
    headerActiveLink,
    newHeaderActiveLink =>
      dispatch({
        type: types.HEADER_ACTIVE_LINK_CHANGED,
        headerActiveLink: newHeaderActiveLink
      })
  ]
}
