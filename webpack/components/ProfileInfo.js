import React, { Component } from 'react';
import foamgeode from '../images/foamgeode.jpg';
import categoryOptions from './categoryOptions';
import Select from 'react-select';


class ProfileInfo extends Component {
  render() {
    let cat = this.props.selectedCategories;
    let { zip_code, bio, inspirations, url } = this.props.profile;
    let categories = Object.keys(cat).map( key => {
      let category = cat[key]
      return (
        <div>
        { category.length ?
          <dd key={key} className="text-capitalize">
            <span><strong>{key}:{' '}</strong>{cat[key].join(", ")}</span>
          </dd> : null
        }
        </div>
      )
    });
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
                {categories}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ProfileInfo;
