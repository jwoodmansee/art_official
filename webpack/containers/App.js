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

  landingImg() {
    let pathname = window.location.pathname;
    if (pathname !== '/') {
      $('body').removeClass('home-bg');
    } else {
      $('body').addClass('home-bg');
    }
  }

  render() {
    return (
      <div>
        {this.landingImg()}
          <Navbar auth={this.props.auth} history={this.props.history} />
            { this.props.children }

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
