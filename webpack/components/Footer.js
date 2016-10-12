import React, { Component } from 'react';
import { Link } from 'react-router';
import MoreInfo from './MoreInfo';


class Footer extends Component {

  render() {
    return(
      <footer className='footer footer-color-black'>
        <MoreInfo />
        <div className='container'>
          <nav className='pull-left navbar collapse navbar-collapse'>
            <ul className="nav navbar-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/about'>Why Collab?</Link></li>
            </ul>
          </nav>
          <div className='social-area pull-right'>
            <Link to='#'><span className="social social-facebook"></span></Link>
            <Link to='#'><span className="social social-instagram"></span></Link>
            <Link to='#'><span className="social social-twitter"></span></Link>
          </div>
          <div className='copyright'>
            © 2016 co \\ art collaborative
          </div>
        </div>
      </footer>
    )
  }
}



export default Footer;
