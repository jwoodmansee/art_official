import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Projects from './components/Projects';
import Profiles from './components/Profiles';
import NoMatch from './components/NoMatch';

export default (
  <Route>
    <Route path="/" component={App} />
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

