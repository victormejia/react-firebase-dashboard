import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config';
import './pages/Signup';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import { UserProvider } from './firebase/UserProvider';
import Profile from './pages/Profile';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
