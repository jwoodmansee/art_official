import React, { Component } from 'react';
import Projects from './Projects';
import foamgeode from '../images/foamgeode.jpg';
import categoryOptions from './categoryOptions';
import ProfileInfo from './ProfileInfo';
import Select from 'react-select';

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
    this.state = { profile: {
                   categories: {}
                   },
                   user: {},
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

  checkboxes() {
    let categoryDropdowns = Object.keys(this.categoryOptions).map( categoryKey => {
      let options = this.generateCategoryOptions(categoryKey)
      return(
        <div key={categoryKey}>
          <label className='text-capitalize'>{categoryKey.split("_").join(" ")}</label>
          <Select
            name="form-field-name"
            value={this.state.selectedCategories[categoryKey]}
            multi={true}
            options={options}
            onChange={ (val) => this.updateSelected(val, categoryKey) }
          />
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
      let cat = this.state.selectedCategories;
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
          <ProfileInfo toggleEdit={this.state.toggleEdit} displayUserInfo={this.state.displayUserInfo} profile={this.state.profile} />
          { this.displayProjects() }
        </div>
      )
    }
  }
}

export default Profile;
