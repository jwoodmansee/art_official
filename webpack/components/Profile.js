import React, { Component } from 'react';
import Projects from './Projects';
import foamgeode from '../images/foamgeode.jpg';

const styles = {
  row: {
    backgroundColor: '#E8E6ED',
    minHeight: '300px',
  },
  textLink: {
    cursor: 'pointer',
  }
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.state = { profile: {}, user: {}, profile_category: {}, edit: false, category: false };
  }

  componentWillMount() {
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data =>{
      this.setState({ profile: data.profile, user: data.user });
    }).fail( data => {
      console.log(data)
    });
  }

  newProfile() {
    return(
      <div>
        <form ref='addProfileForm'>
          <input ref="zipCode" autofocus='true' placeholder='My Zip Code' />
          <input ref="bio" type='text' placeholder='About Me and My Art Styles' />
          <input ref="inspirations" />
        </form>
      </div>
    )
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
    let preformance = this.refs.preformance.value;
    let literature = this.refs.literature.value;
    let hand_made = this.refs.hand_made.value;
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { profile: { bio, inspirations, music, photography,
                        videography, muralist, painting,
                        drawing, sculpture, graphic_design, preformance,
                        literature, hand_made }}
    }).done( data => {
      this.setState({ profile: data.profile })
      this.toggleEdit();
    }).fail( data => {
      console.log(data)
    });
  }

  checkboxes() {
    if (this.state.category) {
      return['music', 'photography', 'videography', 'muralist', 'painting',
              'drawing', 'sculpture', 'graphic_design', 'preformance',
              'literature', 'hand_made'
             ].map( (item, i) => {
        return (
          <label key={i} className="text-capitalize">
           <input type="checkbox" ref={item} />{ item.split("_").join(" ") }
          </label>
        )
      })
    }
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
    let { zip_code, bio, inspirations, category, url } = this.state.profile;
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
                    <dd><textarea className='form-control' ref='bio' defaultValue={ bio }></textarea></dd>
                    <dt> inspirations </dt>
                    <dd><input className='form-control'
                               ref='inspirations' type='text'
                               defaultValue={inspirations} /></dd>
                  </dl>
                  <button type='button' className='btn btn-primary btn-xs' onClick={this.toggleCategory}>Categories</button>
                  { this.checkboxes() }
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
                <p onClick={this.toggleEdit} style={styles.textLink}>Edit Profile</p>
                <dl className='dl-horizontal'>
                  <dt> bio </dt>
                  <dd> { bio } </dd>
                  <dt> inspirations </dt>
                  <dd> { inspirations } </dd>
                  <dt> categories</dt>
                  <dd> { category } </dd>
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
