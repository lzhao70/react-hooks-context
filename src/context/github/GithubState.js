import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import { SEARCH_USERS, GET_USER, SET_LOADING } from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users
  const searchUsers = async (txt) => {
    setLoading();
    let usersData = await axios.get(
      `https://api.github.com/search/users?q=${txt}`
    );
    dispatch({ type: SEARCH_USERS, payload: usersData.data.items });
  };

  // get user
  const getUser = async (userName) => {
    setLoading();
    let userData = await axios.get(`https://api.github.com/users/${userName}`);
    dispatch({ type: GET_USER, payload: userData.data });
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        isLoading: state.isLoading,
        users: state.users,
        user: state.user,
        searchUsers: searchUsers,
        getUser: getUser,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
