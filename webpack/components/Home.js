import React, { Component } from 'react';
import { Link } from 'react-router';
import musicCollab from '../images/musicCollab.jpeg';
import Blurb from '../components/Blurb';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='col-xs-12 col-sm-8'>
              <img src={musicCollab} className='img-responsive img-rounded' />
            </div>
              <div className='col-xs-12 col-sm-4'>
                <h1 style={styles.welcome}>
                  We Are A Collaborative Community
                </h1>
              </div>
          </div>
        </div>
        <div>
          <br />
          <br />
          <Blurb />
        </div>
      </div>

    );
  }
}

const styles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: '10px',
  },
  welcome: {
    float: 'left',
    backgroundColor: 'rgba(0,0,0,0)',
  },
};

export default Home;
