import React from 'react';
import { Link } from 'react-router';
import concert from '../images/concert.jpeg';

const Featured = () => (
  <div className='container'>
    <h1>Featured Projects</h1>
    <h3>The projects below were completed and submitted by Collaborators who met on on this site</h3>
    <hr />
    <div className='row col-sm-12'>
      <h3>
        Sundaii feat. Broken Silence
      </h3>
      <h4>
        'No Lie'
      </h4>
      <div className="embed-responsive embed-responsive-16by9">
        <br />
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/jDlNDKyj3Iw">
        </iframe>
      </div>
      <br />
      <hr />
      <br />
      <div className='col-sm-12'>
        <h3>
          J-Woody, Quan-Ties, and Ann Tha Danga
        </h3>
        <h4>
          'Live from Compton Blvd'
        </h4>
        <div>
          <img src={concert} className='img-responsive img-rounded' />
        </div>
      </div>
    </div>
  </div>
)

export default Featured;
