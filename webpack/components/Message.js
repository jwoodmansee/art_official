import React, {Component} from 'react';
import { Link } from 'react-router';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { message: {} }
  }

  componentWillMount() {
        
  }

  newMessage() {
    
  }


  sendMessage(e) {
    e.preventDefault();
    let subject = this.refs.subject.value;
    let body = this.refs.body.value;
    let timestamp = Date.now();
    $.ajax({
      url: `api/conversations/:conversation_id/messages`
      type: 'POST'
      data: { message: { subject, body }
            }
    }).done( data => {
      this.setState({ message: data.message })
    })
  }


  render() {
    return(
      <div>
        <from onSubmit={this.sendMessage}>
          <input ref='subjest' defaultValue={ subject } />
          <textarea ref='body' defaultValue={ body }></textarea>
          <button type='submit' className='btn'>Send</button>
        </form>
      </div>
    )
  }
}

export default Message

