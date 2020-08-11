import {all, takeLatest} from 'redux-saga/effects'


import { RepositoriesActionTypes } from './repository/types'

import { load } from './repository/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesActionTypes.LOAD_REQUEST, load)
  ])
}