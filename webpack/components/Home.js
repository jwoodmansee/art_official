import React, { Component } from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return(
      <div>
        <div className='container'>
          <div className='row'>
            <span className='header-text'>
              <h1 className='home-text'>
                Collaborative Art
              </h1>
              <h5 className="h5-home">Creation through collaboration.   c o \\ art</h5>
            </span>
          </div>
          <div className='col-xs-12 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-3 home-text p-left'>
            <h4 className='alt-font lead'>
              We provide a community for artists to CONNECT, COLLABORATE, and CREATE.<hr />
              <strong>Creatively inspired.</strong> Born from\\flourished by exposure to other creative mediums through collaboration.
            </h4>

            <div className='enter-btn col-xs-4'>
              <Link to='/about'>Learn More</Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default Home;
