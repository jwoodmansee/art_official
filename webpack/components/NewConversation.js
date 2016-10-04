import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewConversation extends Component {
  constructor(props) {
    super(props);
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest(e) {
    e.preventDefault();
    //this.props.sendTo (project user)
    //this.props.currentUser
  }
   
  render() {
    return(
      <div>
        <form onSubmit={this.sendRequest}>
          <input ref="subject" type="text" defaultValue="Request to collab"/>
          <textarea ref="body" type="text" defaultValue="I like the way that you think, let's get together and collab!"></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.id}
}

export default connect(mapStateToProps)(NewConversation);
