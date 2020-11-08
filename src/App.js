import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    let usersData = await axios.get('https://api.github.com/users');

    this.setState({
      users: usersData.data,
      isLoading: false,
    });
  }

  getUser = async (userName) => {
    this.setState({
      isLoading: true,
    });

    let userData = await axios.get(`https://api.github.com/users/${userName}`);

    this.setState({
      user: userData.data,
      isLoading: false,
    });

    console.log(this.state.user);
  };

  searchUsers = async (txt) => {
    this.setState({
      isLoading: true,
    });

    let usersData = await axios.get(
      `https://api.github.com/search/users?q=${txt}`
    );

    this.setState({
      users: usersData.data.items,
      isLoading: false,
    });
  };

  setAlert = (msg, classN) => {
    this.setState({
      alert: { msg: msg, classN: classN },
    });

    setTimeout(() => {
      this.setState({
        alert: null,
      });
    }, 5000);
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar title={'Github Finder'} />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/'>
                <Users
                  searchUsers={this.searchUsers}
                  users={this.state.users}
                  isLoading={this.state.isLoading}
                  setAlert={this.setAlert}
                />
              </Route>
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/users/:login'
                render={(props) => (
                  <UserDetails
                    {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
