import React, { Component } from 'react';
import { Link } from 'react-router';

class MoreInfo extends Component {
  render() {
    return(
      <div>
        <div className='container'>
          <div className='row'>
            <div className='navbar-toggle collapsed text-center'
              data-toggle='collapse'
              data-target='#more-info'
              aria-expanded='false'>
              <span className='sr-only'>Toggle More Info</span>
              <span className='glyphicon glyphicon-chevron-down navcon'></span>
            </div>

            <div className='collapse navbar-collapse' id='more-info'>
              <div className='col-sm-4 col-1-3'>
                <h5> Who We Are <small>what we do </small></h5>
                <span><p> Connecting artist together for creative collaborations. This website is not designed to make you famous. We are designed to connect artists directly together, with the hope that new art will be created and put into the world.</p> </span>
              </div>
              <div className='col-sm-4 divide col-1-3'>
                <h5> address \\ email \\ tele <small>contact us </small></h5>
                <p>
                  Via 370 300 E, Salt Lake City, UT 84111
                  <br />
                  E  collabart@collaborate.com
                  <br />
                  P  801.000.0000
                  <br />
                </p>
              </div>
              <div className='divide col-sm-4 col-1-3 btn-text-grey'>
                <Link to='/sign_up'>
                  <div className='custom-btn text-center'>
                    Sign Up \\ Collab
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoreInfo;
