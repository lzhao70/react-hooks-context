import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
  return (
    <div class='user-card'>
      <img src={props.user.avatar_url} alt='Github User Img' />

      <label>Login</label>
      <input type='text' disabled value={props.user.login} />

      <div className='user-card-buttons'>
        <Link to={`/users/${props.user.login}`} className='bg-dark text-dark'>
          Details
        </Link>

        <a href={props.user.html_url} target='_blank' rel='noreferrer'>
          Github
        </a>
      </div>
    </div>
  );
};

export default User;
