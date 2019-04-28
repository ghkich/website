import { useContextState } from './provider'
import { types } from './reducer'

export const useLogoState = () => {
  const [{ logoState }, dispatch] = useContextState()
  return [
    logoState,
    newLogoForm =>
      dispatch({
        type: types.LOGO_STATE_CHANGED,
        logoState: newLogoForm
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
