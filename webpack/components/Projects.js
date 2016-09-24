import React, { Component } from 'react';
import { Link } from 'react-router';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentWillMount() {
      let url;
      if(this.props.profileId)
        url = `/api/profiles/${this.props.profileId}/projects`;
      else
        url = '/api/all_projects';
      $.ajax({
        url: url,
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
             </li>
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
