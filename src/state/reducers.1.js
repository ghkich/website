const initialState = {
  categoryTypes: null,
  categories: null,
  categoryTypeActive: '',
  logoState: 'identify'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CATEGORY_TYPES_SUCCEEDED':
      return {
        ...state,
        categoryTypes: action.payload
      }
    case 'CATEGORIES_SUCCEEDED':
      return {
        ...state,
        categories: action.payload
      }
    case 'CATEGORY_TYPE_ACTIVE_UPDATED':
      return {
        ...state,
        categoryTypeActive: action.payload
      }
    case 'LOGO_STATE_CHANGED':
      return {
        ...state,
        logoState: action.payload
      }
    default:
      return state
  }
}

export { initialState, reducer }
