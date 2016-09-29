import React, { Component } from 'react';
import { Link } from 'react-router';


class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='container'>
        <div className='nav navbar-bottom'>

          <ul className='nav navbar-nav navbar-right'>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/'>about</Link></li>
            <li><Link to='/'>all projects</Link></li>
            <li><Link to='/'>featured</Link></li>
            <li><Link to='/'>connect</Link></li>
          </ul>
          this is the footer
        </div>
      </div>
    )
  }
}

export default Footer;
