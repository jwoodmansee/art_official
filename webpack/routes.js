import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Projects form './components/Projects';
import NoMatch from './components/NoMatch';

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Projects} />
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)

