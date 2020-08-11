import React from 'react';
import { Repository } from '../../store/ducks/repository/types'
// import { Container } from './styles';

interface Props {
  repository: Repository,
}
const RepositoryItem: React.FC<Props> = ({ repository }) => {
  return (
    <li >{repository.name}</li>
  )
}

export default RepositoryItem;