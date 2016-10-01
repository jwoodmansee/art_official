import React, { Component } from 'react';
import categoryOptions from '../categoryOptions';

class EditProfileCat extends Component {


  generateCategoryOptions(key) {
    let options = [];
    let selected = [];
    let userCategory = this.props.categoryOptions[key];
    userCategory.forEach( subCategory => {
      options.push({ value: subCategory, label: subCategory });
    });
    return options
  }


  catSelect(categoryKey) {
    let options = this.generateCategoryOptions(categoryKey);
    let subCat = this.categoryOptions[categoryKey];
    return(
      <Select
        name="form-field-name"
        value={this.props.selectedCategories[categoryKey]}
        multi={true}
        options={options}
        onChange={ (val) => this.updateSelected(val, categoryKey) }
      />
    )
  }

  dropDowns() {
    let categoryDropdowns = Object.keys(this.categoryOptions).map( categoryKey => {
      let select = this.catSelect(categoryKey);
      return(
        <div key={categoryKey}>
          <label onClick={ () => select } className='text-capitalize'>
            <p onClick={this.props.toggleCategory} > {categoryKey.split("_").join(" ")} </p>
          </label>

          { this.state.category ?
            select
            : null
          }

        </div>
      );
    });
    return categoryDropdowns;
  }

  render() {
    return(
      <div>this is the Edit Profile Cat</div>
    )
  }
}

export default EditProfileCat;
