import React, { Component } from 'react';


class ProfileInfo extends Component {

  render() {
    let cat = this.props.selectedCategories;
    let categories = Object.keys(cat).map( key => {
      let category = cat[key]

      return (
          <dd key={key} className="text-capitalize">
            { category.length ?
              <span><i>{key}:{'  '}</i>{cat[key].join(", ")}</span>
              : null
            }
          </dd>
      )
    });
    let { bio, inspirations } = this.props.profile;
    return(
      <dl className='dl-horizontal col-xs-12 col-md-6'>
        <dt> bio </dt>
        <dd className='profile-list'> { bio ? bio : 'help collaborators know more about you, add your bio' } </dd>
        <dt> inspirations </dt>
        <dd className='profile-list'> { inspirations ? inspirations : "let others know what you're about" } </dd>
        <dt> Art Style </dt>
        { categories }
      </dl>
    )
  }
}


export default ProfileInfo;
