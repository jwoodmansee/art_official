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
          <div className="navbar-header">
            <Link to='/' className="navbar-brand" style={styles.logo}>
              c o || art
            </Link>
          </div>
          <div className="nav navbar-nav navbar-right">
            <ul className="nav navbar-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/all_projects'>All Projects</Link></li>
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


// var Navbar = React.createClass({
//   getInitialState() {
//     return {
//       currentUser: this.props.current_user
//     };
//   render: function() {
//     return (
//       <ul>
//         <li>
//           <a href={"localhost:3000/profile/"+ this.state.currentUser.id}>Profile</a>
//         <li>
//       <ul>
//     );
//   }
// },
