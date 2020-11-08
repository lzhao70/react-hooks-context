import React, { Fragment } from 'react';
import Users from '../Users/Users';
import Search from '../Search/Search';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
