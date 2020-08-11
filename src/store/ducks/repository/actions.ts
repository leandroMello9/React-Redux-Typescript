import { action } from 'typesafe-actions';
import {RepositoriesActionTypes, Repository} from './types'


export const loadRequest = () => action(RepositoriesActionTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) => action(RepositoriesActionTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RepositoriesActionTypes.LOAD_FAILURE);