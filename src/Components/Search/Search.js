import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something!', 'alert alert-danger');
      return;
    }

    searchUsers(text);
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
  searchUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
