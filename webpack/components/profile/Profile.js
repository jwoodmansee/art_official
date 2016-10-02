import React, { Component } from 'react';
import Projects from '../Projects';
import categoryOptions from '../categoryOptions';
import ProfileInfo from './ProfileInfo';
import EditProfile from './EditProfile';
import { connect } from 'react-redux';
import { loggedIn } from '../auth/actions';
import Select from 'react-select';
import DropZone from 'react-dropzone';
import request from 'superagent';
require('superagent-rails-csrf')(request);

const styles = {
  row: {
    backgroundColor: '#EDEDEF',
    minHeight: '300px',
  },
  textLink: {
    color: '#015FB6',
    cursor: 'pointer',
  }
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.catSelect = this.catSelect.bind(this);
    this.generateCategoryOptions = this.generateCategoryOptions.bind(this);
    this.state = { profile: { categories: {} },
                   user: {},
                   files: [],
                   edit: false,
                   category: false,
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

  componentWillMount() {
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data =>{
      this.setState({
        profile: data.profile,
        user: data.user,
        selectedCategories: {...data.profile.categories}
      });
    }).fail( data => {
      debugger;
      console.log(data)
    });
  }


  addImage(files) {
    let file = files[0];
    let req = request.put('/my_route');
    req.setCsrfToken();
    req.attach('whateverIWantTheParamToBe', file);
      req.end( (err, res) => {
        if (err) {
          //Notify user of error
        } else {
          //set state from json object
        }
      });
}


  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  toggleCategory() {
    this.setState({ category: !this.state.category });
  }

  editProfile(e) {
    e.preventDefault();
    let bio = this.refs.bio.value;
    let inspirations = this.refs.inspirations.value;
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: {
        profile: { bio, inspirations },
        cat: this.state.selectedCategories
      }
    }).done( data => {
      this.setState({ profile: data.profile })
      this.toggleEdit();
    }).fail( data => {
      console.log(data)
    });
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

  updateSelected(val, key) {
    let obj = {};
    obj[key] = val.split(",");
    let newObj = Object.assign({}, this.state.selectedCategories, obj);
    this.setState({ selectedCategories: newObj })
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
          <label onClick={ () => select } className='text-capitalize'>
            <p onClick={this.toggleCategory} > {categoryKey.split("_").join(" ")} </p>
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


  displayProjects() {
    return(
      <div style={styles.row}>
        <div className='container'>
          <Projects profileId={this.props.params.id} />
        </div>
      </div>
    )
  }


  render() {
    let { first_name, last_name, username } = this.state.user;
    return (
      <div className='container-fluid'>
        <div className='row profile-row'>
          <div className='col-xs-12'>
            <h3> { first_name } { last_name } <small>{ username }</small></h3>
            <hr />
            { this.state.edit ?
              <dd onClick={this.toggleEdit} >BACK</dd>
              :
              <dd onClick={this.toggleEdit} >EDIT PROFILE</dd>
            }
          </div>
            { this.state.edit ?
              <EditProfile profile={this.state.profile}
                user={this.state.user}
                editProfile={this.editProfile}
                addImage={this.addImage}
                category={this.state.category}

                />
              :
              <div>
                <ProfileInfo profile={this.state.profile}
                  toggleEdit={this.toggleEdit}
                  user={this.state.user}
                  selectedCategories={this.state.selectedCategories}
                  />
                <div className='col-sm-3 thumbnail'>
                  this will be an image
                </div>
              </div>
            }


        </div>
        <div>
          { this.displayProjects() }
        </div>
      </div>

    )
  }
}

export default Profile;
