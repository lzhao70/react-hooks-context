import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alertContext.setAlertMethod(
        'Please enter something!',
        'alert alert-danger'
      );
      return;
    }

    githubContext.searchUsers(text);
    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className='search-container'>
      <form className='search-form' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Search Users...'
          onChange={onChange}
          value={text}
        />
        <input type='submit' value='Search' className='bg-dark text-dark' />
      </form>
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
