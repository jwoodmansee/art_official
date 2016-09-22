import React, { Component } from 'react';
import { Link } from 'react-router';
import musicCollab from '../images/musicCollab.jpeg';
//import nameOfImage from './images/nameOfImage.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <img source={{/*nameOfImage*/}} style={styles.container} />
          <Text style={styles.welcome}>
            Welcome to CollabART
          </Text>
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
