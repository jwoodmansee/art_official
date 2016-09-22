import React, { Component } from 'react';
import { Link } from 'react-router';
import musicCollab from '../images/musicCollab.jpeg';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <img src={musicCollab} style={styles.container} />
          <h1 style={styles.welcome}>
            Welcome to CollabART
          </h1>
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
};

export default Home;
