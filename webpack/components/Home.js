import React, { Component } from 'react';
import { Link } from 'react-router';
import arrow from '../images/arrow.png';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return(
      <div>
        <div className='row'>
          <div className='container'>
            <div className='col-xs-12 pull-right text-right landing-font'>
              <h1 className='padding-right-1'>Connect.</h1>
              <h1 className='padding-right-3'>Collaborate.</h1>
              <h1 className='padding-right-2'>Create.</h1>
            </div>
          </div>
        </div>

        <div className='col-xs-12'>
          <img src={arrow} className='col-xs-3 col-sm-1 col-sm-offset-5'/>
        </div>
        <div>

          <div className='row-color-size'>
            <div className='container'>
              <span className='header-text'>
                <h1>
                  Collaborative Art
                </h1>
                <h5>Creation through collaboration.   c o \\ art</h5>
              </span>
            </div>
            <div className='col-xs-12 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-3 p-left'>
              <h4 className='alt-font lead'>
                We provide a community for artists to CONNECT, COLLABORATE, and CREATE.<hr />
              <strong>Creatively inspired.</strong> Born from\\flourished by exposure to other creative mediums through collaboration.
              </h4>

              <div className='enter-btn col-xs-3'>
                <Link to='/sign_up'>Sign Up</Link>
              </div>
              <div className='enter-btn col-xs-3'>
                <Link to='/about'>Learn More</Link>
              </div>
            </div>

          </div>
        </div>

      </div>

    );
  }
}


export default Home;
