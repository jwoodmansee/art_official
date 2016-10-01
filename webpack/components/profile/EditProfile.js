import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import EditProfileCat from './EditProfileCat';


class EditProfile extends Component {
  render() {
    let { bio, inspirations } = this.props.profile;
    return(
      <div className='col-xs-12'>
        <DropZone
          className='col-xs-6'
          onDrop={this.props.addImage}
          accept='image/*'>
          <div>
            <span> Drop image or click to upload </span>
          </div>
        </DropZone>
        <form onSubmit={this.props.editProfile}>
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

            <dt> Art Style </dt>
            <dd> <EditProfileCat /> </dd>
          </dl>
          <input type='submit' className='btn btn-primary btn-xs' />
        </form>
      </div>


    )
  }
}


export default EditProfile;
