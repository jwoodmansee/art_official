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
    }).done( projects => {
      this.setState({ projects });
    }).fail( data => {
      console.log(data);
    });
  }

  displayProjects() {
    let projects = this.state.projects.map( projects => {
      return(<li key={project.id}>
                <Link to={`/projects/${project.id}`}>
                  {project.name}
                </Link>
             </li>
            );
    });
  }

  render() {
    return(
      <div>
        All Projects View
        { this.displayProjects() }
      </div>
    )
  }
}

export default AllProjects;
