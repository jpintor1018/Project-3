import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Auth from './Components/Auth';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import UpdateProfile from './Components/UpdateProfile';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import UpdatePassword from './Components/UpdatePassword';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/reset/:token" component={ResetPassword} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
      <Route exact path="/userProfile/:username" component={Profile} />
      <Route exact path="/updateUser/:username" component={UpdateProfile} />
      <Route exact path="/auth" component={Auth} />

      <Route
        exact
        path="/updatePassword/:username"
        component={UpdatePassword}
      />
    </Switch>
  </div>
);


export default Routes;