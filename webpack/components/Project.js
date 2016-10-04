import React, { Component } from 'react';
import { Link } from 'react-router';
import Projects from './Projects';
import { connect } from 'react-redux'



class Project extends Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editProject = this.editProject.bind(this);
    this.state = { project: {}, user: {}, edit: false };
  }

  componentWillMount() {
    $.ajax({
      url: `/api/profiles/${this.props.params.id}/projects/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data =>{
      this.setState({ project: data.project, user: data.user });
    }).fail( data => {
      console.log(data)
    });
  }

  editProject(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    $.ajax({
      url: `/api/profiles/${this.props.profileId}/projects/${this.props.projectId}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { project: { name, description }}
    }).done( data => {
      this.setState({ project: data.project })
      this.toggleEdit();
    }).fail( data => {
      console.log('Failure')
    });
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    let { name, description, active, collab, url } = this.state.project;
    let { id, username, first_name, last_name, email } = this.state.user;
    if(this.state.edit) {
      return(
        <div>
          <button className='btn pull-right btn-danger' onClick={this.toggleEdit}>Cancel</button>
          <form onSubmit={this.editProject}>
            <p>Project Name: <input ref='name' defaultValue={name} /></p>
            <p>Description: <input ref='description' type='text' defaultValue={description} /></p>
            <input type='submit' className='btn' />
          </form>
        </div>
      )
    } else {
      return(
        <div>
          <button className='btn pull-right' onClick={this.toggleEdit}>Edit Profile</button>
          <h3>Username: { username }</h3>
          <p>Project Name: { name }</p>
          <p>Description: { description }</p>
          { this.props.currentUser === this.state.user.id ?
            null : null
          }
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.id }
}

export default Project;
