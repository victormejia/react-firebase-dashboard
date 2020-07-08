import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config';
import './pages/Signup';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { UserProvider } from './firebase/UserProvider';
import Profile from './pages/Profile';
import ProfileRedirect from './router/ProfileRedirect';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
              <ProfileRedirect exact path="/signup" component={Signup} />
              <Route exact path="/profile/:id" component={Profile} />
              <ProfileRedirect exact path="/login" component={Login} />
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
