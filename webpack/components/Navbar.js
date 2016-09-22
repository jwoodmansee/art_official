import React from 'react';
import { Link } from 'react-router';



const Navbar = () => (
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
              About
              // <span className="sr-only">
              //   (current)
              // </span>
            </Link>
          </li>
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

export default Navbar;
