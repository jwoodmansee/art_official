import React, { Component } from 'react';
import { Link } from 'react-router';
import Profile from './Profile';

class Conversation extends Component {
  constructor(props) {     
    super(props);
    this.displayConversations = this.displayConversations.bind(this);
    this.state = { conversations: [] }
  }

  componentWillMount() {
    $.ajax({
      url: `/api/profiles/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data => {
      this.setState({ conversations: data.conversations });
    }).fail()     
  }

  

  displayConversations() {
    let conversations = this.state.conversations.map( conversation => {
      return(<li className='list_unstyled' key={conversation.id}>
              <div>
                <div className='jumbotron'>
                  <h2>  
                    {conversation.subject}
                  </h2>
                  <button className='btn'>View Talks</button>
                </div>
                <div className='modal fade' id={'conversation-' + conversation.id}>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <button type='button' className='close' data-dismiss='modal'><span>&times;</span></button>
                        <h5 className='modal-title'>{conversation.subject}</h5>
                      </div>
                      <div className='modal-body'>
                        <p>{convesration.body}</p>
                      </div>
                      <div className='modal-footer'>
                        <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                        <button type='button' className='btn btn-primary'>Reply</button>
                      </div>
                    </div>
                  </div>
                </div>            
              </div>
            </li>        
          );
    });
    return conversations;
  }


  render() {
    return(
      <div>
        <h1>All Conversations</h1>
        <hr />
        <ul>
          { this.displayConversations() }
        </ul>
      </div>
    )
  }

}

export default Conversation