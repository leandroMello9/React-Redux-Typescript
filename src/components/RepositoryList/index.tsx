import React, { useEffect } from 'react';

import {AplicationState} from '../../store'

import { connect } from 'react-redux';

import { Repository } from '../../store/ducks/repository/types'

import * as RepositoriesActions from '../../store/ducks/repository/actions'

import { bindActionCreators, Dispatch } from 'redux'

import RepositoryItem from '../RepositoryItem'
//Mapeando oque vem do mapStateToProps
interface StateProps {
  repositories: Repository[]
}
//Mapeando as funções do mapDispactchToProps do redux
interface DispatchProps {
  loadRequest(): void;
}

//Propieade que vem do componente pai
interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps

const RepositoryList : React.FC<Props> = ({ repositories, loadRequest }) => {

  useEffect(() => {
    loadRequest();
  }, [loadRequest])
  console.log(repositories)
  return (
    <ul>
      {repositories.map(repository => <RepositoryItem key={repository.id} repository={repository}/>)}
    </ul>
  )
} 
  
 


const mapStateToProps = (state : AplicationState) => ({
  repositories: state.repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);