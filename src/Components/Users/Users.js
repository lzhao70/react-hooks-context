import React, { useContext } from 'react';
import User from './User';
import Spinner from '../Spinner/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  if (githubContext.isLoading) {
    return <Spinner className='mb-1' />;
  } else {
    return (
      <div className='mb-1'>
        <div className='user-card-container'>
          {githubContext.users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

export default Users;
