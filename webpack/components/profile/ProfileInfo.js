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
      <dl className='dl-horizontal col-xs-12 col-md-8'>
        <dt> bio </dt>
        <dd> { bio ? bio : 'help collaborators know more about you, add your bio' } </dd>
        <dt> inspirations </dt>
        <dd> { inspirations ? inspirations : "let others know what you're about" } </dd>
        <dt> categories </dt>
        { categories }
      </dl>
    )
  }
}


export default ProfileInfo;
