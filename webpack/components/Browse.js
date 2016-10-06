import React from 'react';
import Projects from './Projects';
import Profiles from './Profiles';
import Profiles2 from './Profiles2';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {profiles: [], projects: []}
  }

  componentWillMount() {
    $.ajax({
     url: '/api/browse_all',
     type: 'GET',
     dataType: 'JSON'
   }).done(data => {
     this.setState({profiles: data.profiles, projects: data.projects});
    }).fail(data => {
     console.log(data);
    });
   }

  reset() {
    this.refs.search.value = '';
    this.setState({ visibleItems: this.state.items, searching: false });
  }

  search() {

    search = refs.search

    $.ajax
      /search
      data: search


    let items = [];
    let term = this.refs.search.value;
    if (term === '') {
      items = [{name: 'No Results'}];
    } else {
      let regex = new RegExp(term, 'i')
      items = this.state.items.filter( i => regex.test(i.name));
    }
    this.setState({ visibleItems: items, searching: true });
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <input refs="searchInput" placeholder="Enter Username" />
          <button onClick={this.search}>Search</button>
        </div>
        <Profiles />
        <Projects />
      </div>
    )
  }
}

export default Browse;
