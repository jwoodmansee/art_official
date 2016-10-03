import React, { Component } from 'react';
import { Link } from 'react-router';
import musicCollab from '../images/musicCollab.jpeg';
import img065 from '../images/img065.JPG';
import img116 from '../images/img116.JPG';
import img200 from '../images/img200.JPG';
import Blurb from '../components/Blurb';
import MoreInfo from './MoreInfo';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='row'>
        <div className='container'>
          <div className='col-sm-12'>
            <span className='header-text'>
              <h1>
                We Are A Collaborative Community<small> \\ \ </small>
              </h1>
            </span>
          </div>
        </div>

        <div className='row'>
          <img src={musicCollab}
               className='img-responsive col-xs-6 col-md-5' />
          <img src={img065}
               className='img-responsive col-xs-6 col-md-3' />
          <img src={img200}
               className='img-responsive col-xs-6 col-md-4' />
          <span className='col-xs-6 col-md-3'>
            <h4 className='main-text'> think of a great line to go right here
            </h4>
          </span>

          <div className='blurb-box'></div>

        </div>

        <div className='row'>
          <div className='white-space'></div>

          <Blurb />
          
          <div className='white-space'></div>
        </div>
        <MoreInfo />
      </div>

    );
  }
}


export default Home;
