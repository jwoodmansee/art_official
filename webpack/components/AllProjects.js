import React, { Component } from 'react';

class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] }
  }

  componentWillMount() {
    // make an ajax call to get all the projects out of the database
    $.ajax({
      url: '/api/all_projects',
      type: 'GET',
      dataType: 'JSON'
    }).done( profects => {
      this.setState({ projects });
    }).fail( data => {
      console.log(data);
    });
  }

  render() {
    return(
      <div>
        All Projects View
      </div>
    )
  }
}

export default AllProjects;
