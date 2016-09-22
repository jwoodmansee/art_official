import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import Projects from './components/Home';
import Projects from './components/Projects';
import Profiles from './components/Profiles';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NoMatch from './components/NoMatch';

const UserIsAuthendticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: () => history.push,
  wrapperDisplayName: 'UserIsAuthendticated'
});

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='login' component={Login} />
      <Route path='signup' component={Signup} />
      <Route path='admin' component={UserIsAuthendticated(Admin)} />
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)
