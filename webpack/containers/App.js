import React from 'react';
import Map from '../components/Map';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { loggedIn, logout } from '../components/auth/actions';

class App extends React.Component {
  componentWillMount() {
    let userId = localStorage.getItem('userId');
    let apiKey = localStorage.getItem('apiKey');

    if (!this.props.auth && apiKey)
      this.props.dispatch(loggedIn(userId, apiKey))
    else
      this.props.dispatch(logout())
  }

  render() {
    return (
      <div>
        <Navbar auth={this.props.auth} history={this.props.history} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.auth)
    return {
      auth: state.auth.isAuthenticated
    }
  else
    return state
}

export default connect(mapStateToProps)(App);

// const App = ({ children }) => (
//   <div>
//     <Navbar />
//     <Map />
//     { children }
//   </div>
// )
//
// export default App;
