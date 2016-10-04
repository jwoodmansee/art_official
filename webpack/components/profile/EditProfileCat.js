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
    this.updateSelected = this.updateSelected.bind(this);
    this.state = { category: false,
                   selectedCategories: {
                      music: [],
                      photography: [],
                      videography: [],
                      muralist: [],
                      painting: [],
                      drawing: [],
                      sculpture: [],
                      graphic_design: [],
                      performance: [],
                      literature: [],
                      hand_made: []
                   }
                 };
    this.categoryOptions = categoryOptions();
  }


  toggleCategory() {
    this.setState({ category: !this.state.category });
  }

  updateSelected(val, key) {
    let obj = {};
    obj[key] = val.split(",");
    let newObj = Object.assign({}, this.state.selectedCategories, obj);
    this.setState({ selectedCategories: newObj})
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
        value={this.state.selectedCategories[categoryKey]}
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
          <label className='text-capitalize' onClick={ () => select }>
            {categoryKey.split("_").join(" ")}
          </label>

          {
            select
          }

        </div>
      );
    });
    return categoryDropdowns;
  }

  render() {

    return(
      <div>
        <h4>Choose Categories</h4>
        <dd> { this.catDropDown() } </dd>
      </div>
    )
  }
}

export default EditProfileCat;
