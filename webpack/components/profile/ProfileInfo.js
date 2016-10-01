import React, { Component } from 'react';


class ProfileInfo extends Component {
  render() {
    let cat = this.props.selectedCategories;
    let categories = Object.keys(cat).map( key => {
      let category = cat[key]

      return (
        <div>
        { category.length ?
          <dd key={key} className="text-capitalize">
            <span><i>{key}:{'  '}</i>{cat[key].join(", ")}</span>
          </dd> : null
        }
        </div>
      )
    });
    let { bio, inspirations } = this.props.profile;
    return(
      <div className='col-xs-12 col-sm-6 pull-right'>
        <dl className='dl-horizontal'>
{/* ternary for showing Edit Profile link only if id's match */}
          <dd onClick={this.props.toggleEdit} >EDIT PROFILE</dd>
          <dt> bio </dt>
          <dd> { bio ? bio : 'help collaborators know more about you, add your bio' } </dd>
          <dt> inspirations </dt>
          <dd> { inspirations ? inspirations : "let others know what you're about" } </dd>
          <dt> categories </dt>
          { categories }
        </dl>
      </div>
    )
  }
}


export default ProfileInfo;
