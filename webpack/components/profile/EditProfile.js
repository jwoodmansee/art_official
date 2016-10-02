import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import categoryOptions from '../categoryOptions';
import request from 'superagent';
require('superagent-rails-csrf')(request);

const styles = {
  textLink: {
    color: '#015FB6',
    cursor: 'pointer',
  }
};

class EditProfile extends Component {

  render() {
    let { bio, inspirations } = this.props.profile;
    return(
      <div>
        <form onSubmit={this.props.editProfile} className='col-xs-12 col-sm-6'>
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
        </form>
        <DropZone
          className='col-xs-6 pull-right'
          onDrop={this.props.addImage}
          accept='image/*'>
          <div>
            <span> Drop image or click to upload </span>
          </div>
        </DropZone>
      </div>


    )
  }
}


export default EditProfile;
