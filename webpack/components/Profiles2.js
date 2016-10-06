import React from 'react';

class Profiles2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<li className="list-unstyled container" key={this.props.profile.id}>
              <div className='jumbotron'>
                <p><strong>Bio:</strong> { this.props.profile.bio }</p>
              </div>
           </li>
         )
  }
}

export default Profiles2;
