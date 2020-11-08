import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Users from './Components/Users/Users';
import Alert from './Components/Alert/Alert';
import About from './Components/About/About';
import UserDetails from './Components/Users/UserDetails';

import './App.css';
import 'typeface-nunito';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    async function async() {
      let usersData = await axios.get('https://api.github.com/users');
      setUsers(usersData.data);
      setLoading(false);
    }
    async();
  }, [setUsers, setLoading]);

  const getUser = async (userName) => {
    setLoading(true);
    let userData = await axios.get(`https://api.github.com/users/${userName}`);
    setUser(userData.data);
    setLoading(false);
  };

  const searchUsers = async (txt) => {
    setLoading(true);
    let usersData = await axios.get(
      `https://api.github.com/search/users?q=${txt}`
    );
    setUsers(usersData.data.items);
    setLoading(false);
  };

  const setAlertMethod = (msg, classN) => {
    setAlert({ msg: msg, classN: classN });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <div>
      <Router>
        <NavBar title={'Github Finder'} />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/'>
              <Users
                searchUsers={searchUsers}
                users={users}
                isLoading={isLoading}
                setAlert={setAlertMethod}
              />
            </Route>
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/users/:login'
              render={(props) => (
                <UserDetails {...props} getUser={getUser} user={user} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
