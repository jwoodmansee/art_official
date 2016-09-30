import React, { Component } from 'react';
import { Link } from 'react-router';
import FooterMenu from './FooterMenu';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.showHide = this.showHide.bind(this);
    this.state = { hover: false };
  }

  showHide() {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    return(
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12s col-md-3'
                 onMouseEnter={this.showHide}
                 onMouseLeave={this.showHide}>
              <div className='col-xs-6 col-md-4 rotate'>
                <h3 className='no-margin'> menu </h3>
              </div>

              <div className='col-sm-6 col-md-8'>
                  { this.state.hover
                    ? <FooterMenu />
                  : null
                  }
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
          </div>
        </div>
        <div className='nav navbar-bottom'>
          <div className='container'>
            open to collaborate?
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
