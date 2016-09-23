import React, { Component } from 'react';
import { Link } from 'react-router';

class Blurb extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='blurb_box'>
        <h1>
          We provide a community for artists to Connect, Collaborate, and Create.
        </h1>
      </div>
    );
  }
}

export default Blurb;
