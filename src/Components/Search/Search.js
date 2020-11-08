import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === '') {
      this.props.setAlert('Please enter something!', 'alert alert-danger');
      return;
    }

    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className='search-container'>
        <form className='search-form' onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Search Users...'
            onChange={this.onChange}
            value={this.state.text}
          />
          <input type='submit' value='Search' className='bg-dark text-dark' />
        </form>
      </div>
    );
  }
}

export default Search;
