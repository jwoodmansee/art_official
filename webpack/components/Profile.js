import React, { Component } from 'react';
import Projects from './Projects';
import foamgeode from '../images/foamgeode.jpg';
import categoryOptions from './categoryOptions';

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
    this.generateCategoryOptions = this.generateCategoryOptions.bind(this);
    this.state = { profile: { categories: {} },
                   user: {},
                   edit: false,
                   category: false,
                 };
    this.categoryOptions = categoryOptions();
  }

  componentWillMount() {
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data =>{
      this.setState({ profile: data.profile, user: data.user});
    }).fail( data => {
      console.log(data)
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
    let music = this.refs.music.value;
    let photography = this.refs.photography.value;
    let videography = this.refs.videography.value;
    let muralist = this.refs.muralist.value;
    let painting = this.refs.painting.value;
    let drawing = this.refs.drawing.value;
    let sculpture = this.refs.sculpture.value;
    let graphic_design = this.refs.graphic_design.value;
    let performance = this.refs.performance.value;
    let literature = this.refs.literature.value;
    let hand_made = this.refs.hand_made.value;
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: {
        profile: { bio, inspirations },
        cat: {
          music,
          photography,
          videography,
          muralist,
          painting,
          drawing,
          sculpture,
          graphic_design,
          performance,
          literature,
          hand_made
        }
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
      if (this.state.profile.categories[key].indexOf(subCategory) !== -1)
        selected.push(subCategory);
      options.push(<option key={subCategory}>{subCategory}</option>)
    });
    return { options: options, selected: selected };
  }

  checkboxes() {
    let categoryDropdowns = Object.keys(this.categoryOptions).map( categoryKey => {
      let { options, selected } = this.generateCategoryOptions(categoryKey)
      return(
        <div key={categoryKey}>
          <label className='text-capitalize'>{categoryKey.split("_").join(" ")}</label>
          <select defaultValue={selected} multiple={true} ref={categoryKey}>{options}</select>
        </div>);
    });
    return categoryDropdowns;
  }

  displayUserInfo() {
    let { first_name, last_name } = this.state.user;
    return(
      <div>
        <h2> { first_name } { last_name } </h2>
      </div>
    )
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

  displayCategories() {
    this.state.profile_category.map( cat => {
      <li> cat </li>
    })
  }

  render() {
    let { zip_code, bio, inspirations, url } = this.state.profile;
    let { categories } = this.state.profile.categories
    if(this.state.edit) {
      return(
        <div>
          <div className='container'>
            <div className='row'>
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
                               defaultValue={inspirations} /></dd>
                    <dt><button type='button' className='btn btn-primary btn-xs' onClick={this.toggleCategory}>Categories</button></dt>
                    <dd> { this.checkboxes() } </dd>
                  </dl>
                  <input type='submit' className='btn btn-primary btn-xs' />
                </form>
              </div>
            </div>
          </div>
          { this.displayProjects() }
        </div>
      )
    } else {
      return(
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6'>
                <img src={foamgeode} className='img-responsive img-rounded' />
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
                  {/* <dd> { music ? music : 'let others search you by your interests, ADD CATEGORIES'} </dd> */}
                </dl>
              </div>
            </div>
          </div>
          { this.displayProjects() }
        </div>
      )
    }
  }
}

export default Profile;
