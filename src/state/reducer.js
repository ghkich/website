import { reducer as categoryTypesReducer } from './categoryTypes'

const initialState = {
  categoryTypes: [],
  categoryTypeActive: '',
  categories: [],
  categorieActive: '',
  subCategories: [],
  subCategorieActive: '',
  posts: [],
  postActive: ''
}

const reducer = ({ categoryTypes }, action) => ({
  ...categoryTypesReducer(categoryTypes, action)
})

export { initialState, reducer }
