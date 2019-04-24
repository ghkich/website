import Api from '../../utils/api'
import { initialState } from '../reducer'

const types = {
  CATEGORY_TYPES_DATA_SUCCEEDED: 'category-types/DATA_SUCCEEDED',
  CATEGORY_TYPES_ACTIVE_CHANGED: 'category-types/ACTIVE_CHANGED'
}

const initialState = {
  data: null,
  active: ''
}

const requestCategoryTypes = dispatch => {
  Api.get('/categoryTypes?lang=pt-BR').then(response => {
    dispatch({
      type: types.CATEGORY_TYPES_SUCCEEDED,
      payload: response.data
    })
  })
}

const reducer = (state, action) => {
  switch (action.type) {
    case types.CATEGORY_TYPES_SUCCEEDED:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export { reducer, requestCategoryTypes }
