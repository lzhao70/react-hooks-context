import React, { useEffect, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const UserDetails = (props) => {
  const githubContext = useContext(GithubContext);

  useEffect(
    () => {
      githubContext.getUser(props.match.params.login);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className='user-card detail-card'>
      <div className='detail-card-row'>
        <label htmlFor=''>Login</label>
        <input type='text' value={githubContext.user.login} disabled />
      </div>

      <div className='detail-card-row'>
        <label htmlFor=''>Full Name</label>
        <input type='text' value={githubContext.user.name} disabled />
      </div>

      <div className='detail-card-row'>
        <label htmlFor=''>Location</label>
        <input type='text' value={githubContext.user.location} disabled />
      </div>

      <div className='detail-card-row'>
        <label htmlFor=''>Followers</label>
        <input type='text' value={githubContext.user.followers} disabled />
      </div>

      <div className='detail-card-row'>
        <label htmlFor=''>Following</label>
        <input type='text' value={githubContext.user.following} disabled />
      </div>
    </div>
  );
};

export default UserDetails;
