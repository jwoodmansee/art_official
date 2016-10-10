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
              </span>
          </div>



            <div className='col-xs-12 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-3 home-text p-left'>
              <p className='alt-font lead'>
                We provide a community for artists to CONNECT, COLLABORATE, and CREATE.
                Creatively inspired, mentored. exposed to other creative mediums through collaboration.
              </p>

              <div className='enter-btn col-xs-4'>
                <Link to='/about'>Why Collab?</Link>
              </div>

            </div>

        </div>
      </div>

    );
  }
}


export default Home;
