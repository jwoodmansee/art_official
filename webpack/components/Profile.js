import React, { Component } from 'react'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: {}, user: {} };
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

  editProfile() {
    this.props.history.push(`/profiles/${this.state.profile.id}/edit`);
  }

  deleteProfile() {
    $.ajax({
      url: `/api/profiles/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( () => {
      this.props.history.push('/');
    })
  }

  render() {
    let { zip_code, bio, inspirations, url } = this.state.profile;
    let { id, username, first_name, last_name, email } = this.state.user;
    console.log(this.state)
    return(
      <div>
        <h3>Username: { username }</h3>
        <p>Bio: { bio }</p>
        <p>Inspirations: { inspirations }</p>
        <h4>Projects</h4>
        {/* you can then render the <Projects user_id={id} /> react component here! */}
      </div>
    )
  }
}

export default Profile;
