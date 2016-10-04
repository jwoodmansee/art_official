import React, { Component } from 'react';
import categoryOptions from '../categoryOptions';
import Select from 'react-select';

class EditProfileCat extends Component {
  constructor(props) {
    super(props);
    this.catSelect = this.catSelect.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.generateCategoryOptions = this.generateCategoryOptions.bind(this);
    this.catDropDown = this.catDropDown.bind(this);
    this.categoryOptions = categoryOptions();
  }

  updateSelected(val, key) {
    let obj = {};
    obj[key] = val.split(",");
    let newObj = Object.assign({}, this.props.selectedCategories, obj);
    this.props.updateCat( newObj )
  }

  generateCategoryOptions(key) {
    let options = [];
    let selected = [];
    let userCategory = this.categoryOptions[key];
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

  catDropDown() {
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
      )
    });
    return categoryDropdowns;
  }

  render() {
    let cat = this.props.selectedCategories;
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
        { this.catDropDown() }
      </div>
    )
  }
}

export default EditProfileCat;
