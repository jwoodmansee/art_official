import React, { Component } from 'react';
import Projects from '../Projects';
import categoryOptions from '../categoryOptions';
import ProfileInfo from './ProfileInfo';
import EditProfile from './EditProfile';
import AddProject from './AddProject';
import foamgeode from '../../images/foamgeode.jpg';
import { connect } from 'react-redux';
import { loggedIn } from '../auth/actions';
import Select from 'react-select';
import DropZone from 'react-dropzone';
import request from 'superagent';
require('superagent-rails-csrf')(request);

const styles = {
  row: {
    backgroundColor: '#EDEDEF',
    minHeight: '300px',
  },
  textLink: {
    color: '#015FB6',
    cursor: 'pointer',
  }
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addImage = this.addImage.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.state = { profile: { categories: {}, projects: {} },
                   user: {},
                   files: [],
                   edit: false, slide: false,
                   selectedCategories: {
                     music: [],
                     photography: [],
                     videography: [],
                     muralist: [],
                     painting: [],
                     drawing: [],
                     sculpture: [],
                     graphic_design: [],
                     performance: [],
                     literature: [],
                     hand_made: []
                   }
                 };
  }

  componentWillMount() {
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data =>{
      this.setState({
        profile: data.profile,
        user: data.user,
        selectedCategories: {...data.profile.categories}
      });
    }).fail( data => {
      console.log(data)
    });
  }


  addImage(image_url) {
    let profile = Object.assign({}, this.state.profile, {image_url: image_url})
    this.setState({ profile });
  }


  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }


  toggleAdd() {
    this.setState({ slide: !this.state.slide });
  }

  updateProfile(data) {
    this.setState({ profile: data.profile });
  }


  updateCat(newObj) {
    this.setState({ selectedCategories: newObj })
  }


  displayProjects() {
    return(
      <div style={styles.row}>
        <div className='container'>
          <Projects profileId={this.props.params.id} />
        </div>
      </div>
    )
  }

  onDrop(files) {
    let file = files[0];
    let req = request.put(`/api/profiles/${this.state.profile.id}/`);
    req.setCsrfToken();
    req.attach('file', file);
    req.end( (err, res) => {
      this.addImage(res.body.profile.image_url);
    });
  }

  render() {
    let src = this.state.profile.image_url || foamgeode
    let { first_name, last_name, username } = this.state.user;
    let editButton = this.state.edit ? 'BACK' : 'EDIT PROFILE';
    return (
      <div>

        <div className='container row'>
          <div className='col-xs-12'>
            <h3> { first_name } { last_name } <small>{ username }</small></h3>
            <p onClick={this.toggleEdit} style={styles.textLink}>{ editButton }</p>
            <hr />
          </div>
        </div>

        <div className='row profile-row'>
          <div className='col-xs-4 col-sm-2'>
            <img src={src} className='img-responsive img-rounded' />
            <DropZone
              className='col-xs-6 pull-left'
              onDrop={this.onDrop}
              multiple={false}
              accept='image/*'>
              <div>
                <br/>
                <button type='button' className='btn btn-default'> Upload Avatar Image </button>
              </div>
            </DropZone>
          </div>

          { this.state.edit ?
            <EditProfile profile={this.state.profile}
              user={this.state.user}
              addImage={this.addImage}
              toggleEdit={this.toggleEdit}
              updateProfile={this.updateProfile}
              updateCat={this.updateCat}
              selectedCategories={this.state.selectedCategories}
              />
            :
            <div>
              <ProfileInfo profile={this.state.profile}
                toggleEdit={this.toggleEdit}
                user={this.state.user}
                selectedCategories={this.state.selectedCategories}
                />
            </div>
          }
        </div>
        <div>
          { this.displayProjects() }
        </div>
      </div>
    )
  }
}

export default Profile;
