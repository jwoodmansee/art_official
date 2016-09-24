import React, { Component } from 'react'
import Projects from './Projects';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.state = { profile: {}, user: {}, edit: false };
  }

  componentWillMount() {
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data =>{
      this.setState({ profile: data.profile, user: data.user });
    }).fail( data => {
      console.log(data)
    });
  }

  newProfile() {
    return(
      <div>
        <form ref='addProfileForm'>
          <input ref="zipCode" autofocus='true' placeholder='My Zip Code' />
          <input ref="bio" type='text' placeholder='About Me and My Art Styles' />
          <input ref="inspirations" />
        </form>
      </div>
    )
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  editProfile(e) {
    e.preventDefault();
    let bio = this.refs.bio.value;
    let inspirations = this.refs.inspirations.value;
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { profile: { bio, inspirations }}
    }).done( data => {
      this.setState({ profile: data.profile })
      this.toggleEdit();
    }).fail( data => {
      console.log(data)
    });
  }

  render() {
    let { zip_code, bio, inspirations, url } = this.state.profile;
    let { id, username, first_name, last_name, email } = this.state.user;
    if(this.state.edit) {
      return(
        <div>
          <button className='btn pull-right btn-danger' onClick={this.toggleEdit}>Cancel</button>
          <form onSubmit={this.editProfile}>
            <p>Bio: <textarea ref='bio' defaultValue={bio}></textarea></p>
            <p>Inspirations: <input ref='inspirations' type='text' defaultValue={inspirations} /></p>
            <input type='submit' className='btn' />
          </form>
        </div>
      )
    } else {
      return(
        <div>
          <button className='btn pull-right' onClick={this.toggleEdit}>Edit Profile</button>
          <h3>Username: { username }</h3>
          <p>Bio: { bio }</p>
          <p>Inspirations: { inspirations }</p>
          <h4>Projects</h4>
          <Projects profileId={this.props.params.id} /> 
        </div>
      )
    }
  }
}

export default Profile;
