import { fromJS } from 'immutable'
import schema from '../schema/index'
import  {SEARCH_ENTITIES} from '../actions_type/index'

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',
})



function data(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ENTITIES: {
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}

export default data;
