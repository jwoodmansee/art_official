import React, { Component } from 'react'
import Projects from './Projects';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.state = { profile: {}, user: {}, profile_category: {}, edit: false, category: false };
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

  toggleCategory() {
    this.setState({ category: !this.state.category });
  }

  editProfile(e) {
    e.preventDefault();
    let bio = this.refs.bio.value;
    let inspirations = this.refs.inspirations.value;
    let music = this.refs.music.value;
    let photography = this.refs.photography.value;
    let videography = this.refs.videography.value;
    let muralist = this.refs.muralist.value;
    let painting = this.refs.painting.value;
    let drawing = this.refs.drawing.value;
    let sculpture = this.refs.sculpture.value;
    let graphic_design = this.refs.graphic_design.value;
    let preformance = this.refs.preformance.value;
    let literature = this.refs.literature.value;
    let hand_made = this.refs.hand_made.value;
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { profile: { bio, inspirations, music, photography, videography, muralist, painting, 
              drawing, sculpture, graphic_design, preformance, 
              literature, hand_made }}
    }).done( data => {
      this.setState({ profile: data.profile })
      this.toggleEdit();
    }).fail( data => {
      console.log(data)
    });
  }

  checkboxes() {
    if (this.state.category) {
      return['music', 'photography', 'videography', 'muralist', 'painting', 
              'drawing', 'sculpture', 'graphic_design', 'preformance', 
              'literature', 'hand_made' 
             ].map( (item, i) => {
        return (
          <label key={i} className="text-capitalize">
           <input type="checkbox" ref={item} />{ item.split("_").join(" ") }
          </label>
        )
      })
    }
  }

  render() {
    let { zip_code, bio, inspirations, category, url } = this.state.profile;
    let { id, username, first_name, last_name, email } = this.state.user;
    if(this.state.edit) {
      return(
        <div>
          <button className='btn pull-right btn-danger' onClick={this.toggleEdit}>Cancel</button>
          <form onSubmit={this.editProfile}>
            <p>Bio: <textarea ref='bio' defaultValue={bio}></textarea></p>
            <p>Inspirations: <input ref='inspirations' type='text' defaultValue={inspirations} /></p>
            <button type='button' className='btn' onClick={this.toggleCategory}>Categories</button>
            { this.checkboxes() }
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
          <p>Categories: { category }</p>
          <h4>Projects</h4>
          <Projects profileId={this.props.params.id} /> 
        </div>
      )
    }
  }
}

export default Profile;
