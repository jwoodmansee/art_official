import React from 'react';
import Map from '../components/Map';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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

        <div id='wrap'>
          <div id='main'>
            { this.props.children }
          </div>
        </div>
        <footer className="footer gray-bg">
          <Footer history={this.props.history} />
        </footer>
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
