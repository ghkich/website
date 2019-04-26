export const types = {
  HEADER_ACTIVE_LINK_CHANGED: 'header/ACTIVE_LINK_CHANGED',
  LOGO_ACTIVE_BRICK_CHANGED: 'logo/ACTIVE_BRICK_CHANGED',
  LOGO_FORMAT_CHANGED: 'logo/FORMAT_CHANGED'
}

export const initialState = {
  headerActiveLink: '',
  logoFormat: 'identify',
  logoActiveBrick: ''
}

export const reducer = (state, action) => {
  switch (action.type) {
    case types.HEADER_ACTIVE_LINK_CHANGED:
      return {
        ...state,
        headerActiveLink: action.headerActiveLink
      }
    case types.LOGO_FORMAT_CHANGED:
      return {
        ...state,
        logoFormat: action.logoFormat
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
