import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Project from './components/Project';
import Profiles from './components/Profiles';
import Profile from './components/Profile';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Blurb from './components/Blurb';
import NoMatch from './components/NoMatch';

const UserIsAuthendticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: history.push,
  wrapperDisplayName: 'UserIsAuthendticated'
});

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path='profiles' component={Profiles} />
      <Route path='all_projects' component={Projects} />
      <Route path='about' component={About} />
      <Route path='login' component={Login} />
      <Route path='sign_up' component={Signup} />
      <Route path='profiles/:id' component={UserIsAuthendticated(Profile)} />
      <Route path="*" status={404} component={NoMatch} />
    </Route>
  </Route>
)
