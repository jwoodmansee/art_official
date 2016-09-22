import React, { Component } from 'react';
import { Link } from 'react-router';

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profiles: [] };
  }

  componentWillMount() {
   $.ajax({
    url: '/api/profiles',
    type: 'GET',
    dataType: 'JSON'
   }).done(profiles => {
    this.setState({profiles});
   }).fail(data => {
    console.log(data);
   });     
  }

  displayProfiles() {
    let profiles = this.state.profiles.map( profiles => {
      return(<li key={profile.id}>
                <Link to={`/api/profiles/${profile.id}`}>
                  {profile.bio}
                </Link>
             </li>

      )
    });
    return profiles;
  }

  render() {
    return(
      <div>
        <h1>Artist</h1>
        <ul>
          { this.displayProfiles() }
        </ul>
      </div>
    )
  }
}

export default Profiles;