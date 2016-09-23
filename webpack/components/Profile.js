import React, { Component } from 'react'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: {} };
  }

  componentWillMount() {
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( profile =>{
      this.setState({ profile });
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
          <input ref="inspirations"
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
    let { zip_code, bio, inspirations, user_id } = this.state.profile;
    return(
      <div>
      {/* TODO figure out whether or not we're doing a username */}
        <h3>{ user_id {/*Would rather have username*/}}</h3>
        <p>{ bio }</p>
        <p>{ inspirations }</p>
      </div>
    )
  }
}

export default Movie;
