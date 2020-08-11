//Actions types


export enum RepositoriesActionTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

//DataTypes = formato das informações que esta dentro dos reducers
//Reducers


export interface Repository {
  id: number;
  name: string;
}


//State Type = Tipagem do estado do reducer

export interface RepositoriesState {
  readonly data: Repository[],
  readonly loading: boolean,
  readonly error: boolean
}