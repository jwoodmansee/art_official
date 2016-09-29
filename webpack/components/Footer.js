import React, { Component } from 'react';
import { Link } from 'react-router';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.state = { hover: false };
  }

  showMenu() {
    return(
      <div>This is not working yet</div>
    )
    console.log(data);
  }

  render() {
    return(
      <div className='container'>
        <section className='row'>
          <div className='col-sm-6 col-md-3'>
            <div className='inner rotate'>
                <h4 onMouseEnter={() => showMenu()}> Menu </h4>
            </div>
          </div>

          <div className='col-sm-6 col-md-3'>
            <h5> Who We Are </h5>

            <Link to='/about'>
            <p> Connecting artist together for creative collaborations.</p>
            </Link>

            <p> Thank You For Visiting Our Site!</p>
            <Link to='/support'>Support</Link>
          </div>

          <div className='col-sm-12 col-md-6'>
            <h5> Contact Us </h5>
            <p>
              Via 370 300 E, Salt Lake City, UT 84111
              <br />
              P  801.000.0000
              <br />

            </p>
          </div>
        </section>
        <div className='nav navbar-bottom'>

          open to collaborate?
        </div>
      </div>
    )
  }
}

export default Footer;
