import React from 'react';
import { connect } from 'react-redux';
import { handleSignup } from './actions';

class Signup extends React.Component {
  constructor(props) {
    super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = { error: false, redirectRoute: '/' }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let first_name = this.refs.first_name.value;
    let last_name = this.refs.last_name.value;
    let username = this.refs.username.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.props.dispatch(handleSignup(first_name, last_name, username, email, password, this.state.redirectRoute, this.props.history))
  }
  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <input ref='first_name' required placeholder='First Name' /><br />
          <input ref='last_name' required placeholder='Last Name' /><br />
          <input ref='username' required placeholder='Username' /><br />
          <input ref='email' required placeholder='Email' /><br />
          <input ref='password' type='password' required placeholder='Password' /><br />
          <button type='submit' className='btn'>Sign Up</button>
        </form>
      </div>

    )
  }
}

export default connect()(Signup);
