import React, { Component } from 'react';
import categoryOptions from '../categoryOptions';
import AddImage from '../AddImage';
import EditProfileCat from './EditProfileCat';
import DropZone from 'react-dropzone';
import request from 'superagent';
require('superagent-rails-csrf')(request);


const styles = {
  textLink: {
    color: '#015FB6',
    cursor: 'pointer',
  }
};

class EditProfile extends Component {
  constructor() {
    super();
    this.editProfile = this.editProfile.bind(this);
  }

  editProfile(e) {
    e.preventDefault();
    let id = this.props.profile.id;
    let bio = this.refs.bio.value;
    let inspirations = this.refs.inspirations.value;
    $.ajax({
      url: `/api/profiles/${id}`,
      type: 'PUT',
      data: { profile: { bio, inspirations},
              cat: this.props.selectedCategories },
      dataType: 'JSON'
    }).done( data => {
      debugger
      this.props.updateProfile(data);
      this.props.toggleEdit();
    }).fail( data => {
      console.log(data)
    });
  }



  render() {
    let { bio, inspirations, img } = this.props.profile;
    return(
      <form onSubmit={this.editProfile} className='col-xs-12 col-sm-6'>
        <dl className='dl-horizontal'>
          <dt> bio </dt>
          <dd>
            <textarea className='form-control' ref='bio' defaultValue={ bio }>
            </textarea>
          </dd>
          <dt> inspirations </dt>
          <dd><input className='form-control'
                     ref='inspirations' type='text'
                     defaultValue={ inspirations } /></dd>

        </dl>
        <input type='submit' className='btn btn-primary btn-xs' />
        <EditProfileCat
          selectedCategories={this.props.selectedCategories}
          editProfile={this.editProfile}
          updateCat={this.props.updateCat}/>
      </form>
    )
  }
}


export default EditProfile;
