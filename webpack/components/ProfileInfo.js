import React, { Component } from 'react';


class ProfileInfo extends Component {
  render() {
    let { bio, inspirations } = this.props.profile;
    return(
      <div className='col-xs-12 col-sm-6 pull-right'>
        <dl className='dl-horizontal'>
          <dd onClick={this.props.toggleEdit} >EDIT PROFILE</dd>
          <dt> bio </dt>
          <dd> { bio ? bio : 'help collaborators know more about you, add your bio' } </dd>
          <dt> inspirations </dt>
          <dd> { inspirations ? inspirations : "let others know what you're about" } </dd>
          <dt> categories </dt>
          {this.props.categories}
        </dl>
      </div>

    )
  }
}


export default ProfileInfo;
