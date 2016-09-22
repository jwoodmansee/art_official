import React, { Component } from 'react';
import { Link } from 'react-router';

class Project extends React.Component {
  constructo(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentWillMount() {
      $.ajax({
        url: '/api/projects',
        type: 'GET',
        dataType: 'JSON'
      }).done(projects => {
        this.setState({projects});
      }).fail(data => {
        console.log(data);
      });
  }

  displayProjects() {
    let projects = this.state.projects.map( project => {
      return(<li key={project.id}>
                <Link to={`/projects/${project.id}`}>
                  {project.name}
                </Link>
            );
    });
    return projects;
  }

  render() {
    return(
      <div>
        <h1>All Projects</h1>
        <ul>
          { this.displayProjects() }
        </ul>
      </div>
    )
  }
}

export default Projects;
