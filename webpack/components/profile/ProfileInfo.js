import React, { Component } from 'react';


class ProfileInfo extends Component {
  render() {
    let { profile } = this.props.profile;
    return(
      <div className='col-xs-12 col-sm-6 pull-right'>
        <dl className='dl-horizontal'>
          <dd onClick={this.props.toggleEdit} >EDIT PROFILE</dd>
          <dt> bio </dt>
          <dd> { profile.bio ? profile.bio : 'help collaborators know more about you, add your bio' } </dd>
          <dt> inspirations </dt>
          <dd> { profile.inspirations ? profile.inspirations : "let others know what you're about" } </dd>
          <dt> categories </dt>
          {this.props.categories}
        </dl>
      </div>

    )
  }
}


export default ProfileInfo;
