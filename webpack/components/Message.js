import React, {Component} from 'react';
import { Link } from 'react-router';
import Profile from './profile/Profile';
import Project from './Project';

class Message extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.state = { message: [] }
  }

  componentWillMount() {
        
  }

  toggleNewMessage() {
    
  }


  sendMessage(e) {
    e.preventDefault();
    let body = this.refs.body.value;
    let timestamp = Date.now();
    let conversationID = this.props.conversationID;
    $.ajax({
      url: `/api/conversations/${conversationID}/messages`,
      type: 'POST',
      data: { message: { body }}
    }).done( data => {
      this.setState({ message: data.message })
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.sendMessage}>
          <textarea ref='body' placeholder="Message"></textarea>
          <button type='submit' className='btn'>Send</button>
        </form>
      </div>
    )
  }
}

export default Message;

