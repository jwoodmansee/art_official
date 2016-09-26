import React, { Component } from 'react';
import { Link } from 'react-router';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.displayProjects = this.displayProjects.bind(this);
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
      return(<li className="list-unstyled" key={project.id}>
                <h4><Link to={`/api/profiles/${this.props.profileId}/projects/${this.props.projectId}`}>
                {project.name}
                </Link></h4>
              <p><strong>Description:</strong> {project.description}</p>
             </li>
            );
    });
    return projects;
  }

  render() {
    return(
      <div>
        <h1>All Open Projects</h1>
        <hr />
        <ul>
          { this.displayProjects() }
        </ul>
      </div>
    )
  }
}

export default Projects;
