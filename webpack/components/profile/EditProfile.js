import React, { Component } from 'react';


class EditProfile extends Component {
  render() {
    let { profile } = this.props.profile;
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
              <textarea className='form-control' ref='bio' defaultValue={ profile.bio }>
              </textarea>
            </dd>
            <dt> inspirations </dt>
            <dd><input className='form-control'
                       ref='inspirations' type='text'
                       defaultValue={profile.inspirations} /></dd>

            <dt> Art Style </dt>
            <dd> { this.props.artStyle } </dd>
          </dl>
          <input type='submit' className='btn btn-primary btn-xs' />
        </form>
      </div>


    )
  }
}


export default EditProfile;
