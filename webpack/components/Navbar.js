import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';

const styles = {
  nav: {
    backgroundColor: '#292929',
    borderColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.hover = this.hover.bind(this);
    this.state = { hover: false };
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(handleLogout(this.props.history));
  }

  hover() {
    this.setState({ hover: true })
    console.log('is this working');
  }

  authLink() {
    if (this.props.auth) {
      return (
        [
          <li key="auth-link-0"><Link to="/profile">Profile</Link></li>,
          <li key="auth-link-1"><a href="#" onClick={this.logout}>Logout</a></li>
        ]
      )
    } else {
      return(<li><Link to="/login">Login</Link></li>);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default" style={styles.nav}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand">
              c o || art
            </Link>
          </div>
          <div className="nav navbar-nav navbar-right">
            <ul className="nav navbar-nav">
              <li onMouseEnter={this.hover} ><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              { this.authLink() }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect()(Navbar);
