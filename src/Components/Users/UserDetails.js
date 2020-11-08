import React, { Component } from 'react';

class UserDetails extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    return (
      <div className='user-card detail-card'>
        <div className='detail-card-row'>
          <label htmlFor=''>Login</label>
          <input type='text' value={this.props.user.login} disabled />
        </div>

        <div className='detail-card-row'>
          <label htmlFor=''>Full Name</label>
          <input type='text' value={this.props.user.name} disabled />
        </div>

        <div className='detail-card-row'>
          <label htmlFor=''>Followers</label>
          <input type='text' value={this.props.user.followers} disabled />
        </div>

        <div className='detail-card-row'>
          <label htmlFor=''>Location</label>
          <input type='text' value={this.props.user.location} disabled />
        </div>

        <div className='detail-card-row'>
          <label htmlFor=''>Followers</label>
          <input type='text' value={this.props.user.followers} disabled />
        </div>

        <div className='detail-card-row'>
          <label htmlFor=''>Following</label>
          <input type='text' value={this.props.user.following} disabled />
        </div>
      </div>
    );
  }
}

export default UserDetails;
