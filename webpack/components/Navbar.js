import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';

const styles = {
  nav: {
    backgroundColor: '#282828',
    borderColor: 'black',
    padding: '10px',
  },
  logo: {
    fontFamily: 'Bungee',
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
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(handleLogout(this.props.history));
  }

  authLink() {
    if (this.props.isAuthenticated) {
      return (
        [
          <li key="auth-link-0"><Link to={`/profiles/${this.props.userId}`}>My Profile</Link></li>,
            // profile needs to be /profile/id
            // where do we get the id?
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

          {/*Logo Display*/}
          <div className="navbar-header">
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#mobile-nav' aria-expanded='false'>
              <span className='sr-only'>Toggle Nav</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link to='/' className="navbar-brand" style={styles.logo}>
              c o \\ art
            </Link>
          </div>


          <div className="collapse navbar-collapse" id='mobile-nav'>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/all_projects'>All Projects</Link></li>
              <li><Link to='/profiles'>All Profiles</Link></li>
              <li><Link to='/browse'>Browse</Link></li>
              <li><Link to='/featured'>Featured</Link></li>
              <li><Link to='/about'>About</Link></li>
              { this.authLink() }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userId: state.auth.id
  }
}

export default connect(mapStateToProps)(Navbar);
