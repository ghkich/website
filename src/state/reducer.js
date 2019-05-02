export const types = {
  HEADER_ACTIVE_LINK_CHANGED: 'header/ACTIVE_LINK_CHANGED',
  LOGO_ACTIVE_BRICK_CHANGED: 'logo/ACTIVE_BRICK_CHANGED',
  LOGO_STATE_CHANGED: 'logo/FORMAT_CHANGED'
}

export const initialState = {
  headerActiveLink: '',
  logoState: 'identify',
  logoActiveBrick: ''
}

export const reducer = (state, action) => {
  switch (action.type) {
    case types.HEADER_ACTIVE_LINK_CHANGED:
      return {
        ...state,
        headerActiveLink: action.headerActiveLink
      }
    case types.LOGO_STATE_CHANGED:
      return {
        ...state,
        logoState: action.logoState
      }
    case types.LOGO_ACTIVE_BRICK_CHANGED:
      return {
        ...state,
        logoActiveBrick: action.logoActiveBrick
      }
    default:
      return state
  }
}
