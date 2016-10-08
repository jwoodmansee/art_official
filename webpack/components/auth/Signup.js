import React from 'react';
import { connect } from 'react-redux';
import { handleSignup } from './actions';
import MoreInfo from '../MoreInfo';


class Signup extends React.Component {
  constructor(props) {
    super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = { error: false }
  }

  handleSubmit(e) {
    e.preventDefault();
    let first_name = this.refs.first_name.value;
    let last_name = this.refs.last_name.value;
    let username = this.refs.username.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.props.dispatch(handleSignup(first_name, last_name, username, email, password, this.props.history))
  }
  render() {
    return (
      <div className='row'>
        <div className='container'>
          <div className='col-xs-12'>
            <h3 className='header-text'>Sign Up</h3>
            <hr />
            <form className='form-horizontal col-xs-12 col-sm-6 col-md-4' onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label className='control-label'>First Name</label>
                  <input ref='first_name' className='form-control' required placeholder='First Name' />
              </div>

              <div className='form-group'>
                <label className='control-label'>Last Name</label>
                <div>
                  <input ref='last_name' className='form-control' required placeholder='Last Name' />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label'>Username</label>
                <div>
                  <input ref='username' className='form-control' required placeholder='username' />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label'>Email</label>
                <div>
                  <input ref='email' className='form-control' required placeholder='Email' />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label'>Password</label>
                <div>
                  <input ref='password' className='form-control' required placeholder='Password' />
                </div>
              </div>

              <div className='form-group'>
                <div className='col-sm-offset-2 col-sm-10'>
                  <button type='submit' className='btn btn-default'>Sign Up</button>
                </div>
              </div>
            </form>

            <div className='col-xs-12 col-sm-4 col-sm-offset-2'>
              <blockquote>
                <p>Something goes here! write something good Bryan</p>
              </blockquote>
            </div>
          </div>


        </div>
        <div className='white-space hidden-xs'></div>
        <MoreInfo />
      </div>

    )
  }
}

export default connect()(Signup);
