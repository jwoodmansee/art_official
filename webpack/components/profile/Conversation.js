import React, { Component } from 'react';
import { Link } from 'react-router';
import Profile from './Profile';
import Message from '../Message';

class Conversation extends Component {
  constructor(props) {     
    super(props);
    this.displayConversations = this.displayConversations.bind(this);
    this.toggleConversation = this.toggleConversation.bind(this);
    this.deleteConversation = this.deleteConversation.bind(this);
    this.state = { conversations: [], toggleConversation: false, showMessageComponent: false }
  }

  componentWillMount() {
    $.ajax({
      url: `/api/profiles/${this.props.profileID}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( data => {
      this.setState({ conversations: data.conversations });
    }).fail(data => {
      console.log('fail');
    })
  }

  deleteConversation(id) {
    let conversations = this.state.conversations
    $.ajax({
      url: `/api/conversations/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      let deleteIndex = conversations.findIndex( conversation =>  conversation.id === id )
      this.setState({ conversations: 
        [...conversations.slice(0, deleteIndex), 
         ...conversations.slice(deleteIndex +1, 
          conversations.length )] });
    })
  }


  toggleConversation() {
    this.setState({ conversation: !this.state.conversation });
  }

  displayConversations() {
    let conversations = this.state.conversations.map( conversation => {
      return(<li className='list_unstyled' key={conversation.id}>
              <div>
                <div className='jumbotron'>
                  <h2>  
                    {conversation.subject}
                  </h2>
                  <button className='btn btn-primary' onClick={this.toggleConversation} data-toggle="modal" data-target={"#conversation-" + conversation.id} >View Talks</button>
                  <button className='btn btn-danger' onClick={ () => this.deleteConversation(conversation.id)} >Delete</button>
                </div>
                <div className='modal fade' id={'conversation-' + conversation.id}>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <button type='button' className='close' data-dismiss='modal'><span>&times;</span></button>
                        <h5 className='modal-title'>{conversation.subject}</h5>
                      </div>
                      <div className='modal-body'>
                        <p>{conversation.body}</p>
                      </div>
                      <div className='modal-footer'>
                        <button type='button' 
                                className='btn btn-danger' 
                                data-dismiss='modal'>
                                Close
                        </button>
                        <button type='button' 
                                className='btn btn-primary' 
                                onClick={ () => {this.setState({ showMessageComponent: true })}} >
                                Reply
                          </button>
                          {this.state.showMessageComponent ? <Message /> : null}
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