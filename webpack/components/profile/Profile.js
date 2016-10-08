import React, { Component } from 'react';
import foamgeode from '../../images/foamgeode.jpg';
import Projects from '../Projects';
import categoryOptions from '../categoryOptions';
import AddProject from './AddProject';
import Select from 'react-select';
import DropZone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import { loggedIn } from '../auth/actions';
import Conversation from './Conversation';
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
    this.updateProject = this.updateProject.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.catSelect = this.catSelect.bind(this);
    this.generateCategoryOptions = this.generateCategoryOptions.bind(this);
    this.addImage = this.addImage.bind(this);
    this.displayMyProjects = this.displayMyProjects.bind(this);
    this.state = {
                   conversations: [],
                   profile: {
                   categories: {}
                   },
                   user: {},
                   projects: [],
                   files: [],
                   edit: false,
                   category: false,
                   toggleAdd: false,
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
    let id = this.props.params.id;
    $.ajax({
      url: `/api/profiles/${id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data =>{
      this.setState({
        profile: data.profile,
        projects: data.projects,
        user: data.user,
        selectedCategories: {...data.profile.categories},
        conversations: data.conversations
      });
    }).fail( data => {
      console.log(data)
    });
  }

  addImage(image_url) {
    let profile = Object.assign({}, this.state.profile, {image_url: image_url})
    this.setState({ profile });
  }

  updateProject(projects) {
    this.setState({ projects })
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  toggleCategory() {
    this.setState({ category: !this.state.category });
  }

  displayMyProjects() {
    return(
      <div style={styles.row}>
        <div className='container'>
          <h1>My Projects </h1>
          <br />
          <Projects profileId={this.props.params.id} projects={this.state.projects} />
        </div>
      </div>
    )
  }
  editProfile(e) {
    e.preventDefault();
    let bio = this.refs.bio.value;
    let inspirations = this.refs.inspirations.value;
    let id = this.props.params.id;
    $.ajax({
      url: `/api/profiles/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: {
        profile: { bio, inspirations },
        cat: this.state.selectedCategories
      }
    }).done( data => {
      this.setState({ profile: data.profile })
      this.toggleEdit();
      window.scrollTo(0,0);
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

  artStyle() {
  let categoryDropdowns = Object.keys(this.categoryOptions).map( categoryKey => {
    let select = this.catSelect(categoryKey);
    return(
      <div key={categoryKey}>
        <label onClick={ () => select } className='text-capitalize'>
          <p onClick={this.toggleCategory}>{categoryKey.split("_").join(" ")}</p>
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

  onDrop(files) {
    let file = files[0];
    let req = request.put(`/api/profiles/${this.state.profile.id}/`);
    req.setCsrfToken();
    req.attach('file', file);
    req.end( (err, res) => {
      this.addImage(res.body.profile.image_url);
    });
  }

  displayUserInfo() {
    let src = this.state.profile.image_url || foamgeode
    let { first_name, last_name, username } = this.state.user;
    return(
      <div>
        <h2> { first_name } { last_name } </h2>
        <h4><strong><i> { username } </i></strong></h4>
      </div>
    )
  }


  render() {
    let profileID = this.props.params.id;
    let src = this.state.profile.image_url || foamgeode
    let { zip_code, bio, inspirations, url } = this.state.profile;
    let { categories } = this.state.profile.categories
    if(this.state.edit) {
      return(
        <div>
          <div className='container'>
            <div className='row'>
            <br/>
            <div className='col-xs-6 pull-left'>
              <img src={ src } className='img-responsive img-rounded' />
              <DropZone
                className='dropzone'
                onDrop={this.onDrop}
                multiple={false}
                accept='image/*'>
                <div>
                  <br />
                  <button type='button' className='btn btn-default'> Upload Avatar Image </button>
                </div>
              </DropZone>
            </div>
              <div className='col-xs-12 col-sm-6 pull-right'>
                { this.displayUserInfo() }
                <p onClick={this.toggleEdit} style={styles.textLink}>Back</p>
                <form onSubmit={this.editProfile}>
                  <dl className='dl-horizontal'>
                    <dt> bio </dt>
                    <dd>
                      <textarea className='form-control' ref='bio' defaultValue={ bio }>
                      </textarea>
                    </dd>
                    <dt> inspirations </dt>
                    <dd><input className='form-control'
                               ref='inspirations' type='text'
                               defaultValue={inspirations} />
                   </dd>
                    <dt> Categories </dt>
                    <dd><span className='glyphicon glyphicon-chevron-down'></span>
                       { this.artStyle() } </dd>
                  </dl>
                  <input type='submit' className='btn btn-primary btn-xs' />
                </form>
              </div>
            </div>
          </div>
          { this.displayMyProjects() }
        </div>
      )
    } else {
      let src = this.state.profile.image_url || foamgeode
      let cat = this.state.selectedCategories;
      let categories = Object.keys(cat).map( key => {
        let category = cat[key]
        return (
            <dd key={key} className="text-capitalize">
            { category.length ?
              <span><strong>{key}:{' '}</strong>{cat[key].join(", ")}</span>
              : null
            }
          </dd>
        )
      });

      return(
        <div>
          <div className='row'>
            <div className='container'>
              <div className='col-xs-12 col-sm-6'>
                <br/>
                <img src={ src } className='img-responsive img-rounded' />
                <br/>
              </div>
              <div className='col-xs-12 col-sm-6 pull-right'>
                { this.displayUserInfo() }
                <dl className='dl-horizontal'>
                  <dd onClick={this.toggleEdit} style={styles.textLink}>EDIT PROFILE</dd>
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

          <div>
            { this.displayMyProjects() }
          </div>

          <div className='row'>
            <div className='container'>
              <Conversation profileID={profileID} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Profile;
