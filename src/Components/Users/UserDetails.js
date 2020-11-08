import React, { useEffect } from 'react';

const UserDetails = (props) => {
  const { getUser, user } = props;
  useEffect(() => {
    getUser(props.match.params.login);
  }, [getUser, props.match.params.login]);

  return (
    <div className='user-card detail-card'>
      <div className='detail-card-row'>
        <label htmlFor=''>Login</label>
        <input type='text' value={user.login} disabled />
      </div>

      <div className='detail-card-row'>
        <label htmlFor=''>Full Name</label>
        <input type='text' value={user.name} disabled />
      </div>

      <div className='detail-card-row'>
        <label htmlFor=''>Location</label>
        <input type='text' value={user.location} disabled />
      </div>

      <div className='detail-card-row'>
        <label htmlFor=''>Followers</label>
        <input type='text' value={user.followers} disabled />
      </div>

      <div className='detail-card-row'>
        <label htmlFor=''>Following</label>
        <input type='text' value={user.following} disabled />
      </div>
    </div>
  );
};

export default UserDetails;
