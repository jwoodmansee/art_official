import React, { Component } from 'react';
import foamgeode from '../images/foamgeode.jpg';


class ProfileInfo extends Component {
  render() {
    let { zip_code, bio, inspirations, url } = this.props.profile;
    let { categories } = this.props.profile.categories;
    return(
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-6'>
              <img src={foamgeode} className='img-responsive img-rounded' />
            </div>
            <div className='col-xs-12 col-sm-6 pull-right'>
              { this.props.displayUserInfo() }
              <dl className='dl-horizontal'>
                <dd onClick={this.props.toggleEdit} >EDIT PROFILE</dd>
                <dt> bio </dt>
                <dd> { bio ? bio : 'help collaborators know more about you, add your bio' } </dd>
                <dt> inspirations </dt>
                <dd> { inspirations ? inspirations : "let others know what you're about" } </dd>
                <dt> categories</dt>
                {/* <dd> { music ? music : 'let others search you by your interests, ADD CATEGORIES'} </dd> */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileInfo;
