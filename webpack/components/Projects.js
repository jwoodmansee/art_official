import React, { Component } from 'react';
import { Link } from 'react-router';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.displayProjects = this.displayProjects.bind(this);
    this.toggleProject = this.toggleProject.bind(this);
    this.state = { projects: [], project: false };
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

  toggleProject() {
    this.setState({
      project: !this.state.project
    });
  }

  displayProjects() {
    let projects = this.state.projects.map( project => {
      return(<li className="list-unstyled" key={project.id}>
              <div>
                <button className='jumbotron' onClick={this.toggleProject} data-toggle="modal" data-target={"#project-" + project.id}>
                  <h3>
                  {project.name}
                  </h3>
                  <p><strong>Tags:</strong> {project.description}</p>
                </button>
                <div className="modal fade" id={"project-" + project.id} >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                        <h4 className="modal-title">Modal title</h4>
                      </div>
                      <div className="modal-body">
                        <p><strong>Description:</strong> {project.description}</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
