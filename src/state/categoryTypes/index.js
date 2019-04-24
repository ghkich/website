import Api from '../../utils/api'
import initialState from '../initialState'

const types = {
  CATEGORY_TYPES_DATA_SUCCEEDED: 'category-types/DATA_SUCCEEDED',
  CATEGORY_TYPES_ACTIVE_CHANGED: 'category-types/ACTIVE_CHANGED'
}

const requestCategoryTypes = () => {
  return dispatch => {
    Api.get('/categoryTypes?lang=pt-BR').then(response => {
      dispatch({
        type: types.CATEGORY_TYPES_DATA_SUCCEEDED,
        data: response.data
      })
    })
  }
}

const reducer = (state = initialState.categoryTypes, action) => {
  switch (action.type) {
    case types.CATEGORY_TYPES_DATA_SUCCEEDED:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

export default reducer

export { requestCategoryTypes }
