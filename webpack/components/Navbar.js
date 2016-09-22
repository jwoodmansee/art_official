import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  
  logout(e) {
    e.preventDefault();
    this.props.dispatch(handleLogout(this.props.history));
  }

  authLink() {
    if (this.props.auth) {
      return (
        [
          <li key="auth-link-0"><Link to="/admin">Admin</Link></li>,
          <li key="auth-link-1"><a href="#" onClick={this.logout}>Logout</a></li>
        ]
      )
    } else {
      return(<li><Link to="/login">Login</Link></li>);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand">
              collabART
            </Link>
          </div>
          <div className="nav navbar-nav navbar-right">
            <ul className="nav navbar-nav">
              <li>
                <Link to='/'>
                  Home // unauthenticated routes
                </Link>
                <Link to='/about'>
                  About // unauthenticated routes
                </Link>
              </li>
              { this.authLink() }
              <li>
                <Link to='/'>
                  login
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}

export default Navbar;
