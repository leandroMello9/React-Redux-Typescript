//Cominando os reducers em um unico reducer

import {combineReducers} from 'redux'

import repositories from './repository/reducers'

export default combineReducers({
  repositories
})