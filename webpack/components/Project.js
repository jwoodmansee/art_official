import React, { Component } from 'react';
import { Link } from 'react-router';


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { project: {} };
  }

  componentWillMount() {
    $.ajax({
      url: `/api/`
    })
  }

  createProject() {
    return(
      <h4>Create your profile and be found</h4>
      <div>
        <AddProject />
      </div>
    )
  }

  displayProjects() {
    let projects = this.state.projects.map( project => {
      return(
        <div key={project.id}>
          <li>
            <Link to={`/projects/${project.id}`}>
              <h3>
                { project.name }
              </h3>
              <p>
                description: { project.description }
              </p>
              { project.active ? 'Project Open' : 'Project Closed'}
            </Link>
          </li>
        </div>
      )
    });
    return projects;
  }

  render() {
    return(
      <div>
        <ul>
          if (projects) {
            { this.displayProjects() }
        </ul>
        <div>
          } else {
            { this.createProject() }
          }
        </div>
      </div>
    )
  }
}
