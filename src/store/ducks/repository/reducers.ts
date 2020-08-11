import { RepositoriesState, RepositoriesActionTypes } from './types'

import { Reducer } from 'redux';

const INITIAL_STATE : RepositoriesState = {
  loading: false,
  data: [
    {id: 1, name: 'RocketSeat'}
  ],
  error: false
} 

const reducer : Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RepositoriesActionTypes.LOAD_REQUEST:
      return {...state, loading: true}
    case RepositoriesActionTypes.LOAD_SUCCESS:
      return {...state, loading: false, error: false, data: action.payload.data}
    case RepositoriesActionTypes.LOAD_FAILURE:
      return {...state, error: true, loading: false, data: []}
    default: 
      return state;
  }
}


export default reducer;