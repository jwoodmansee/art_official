import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NewConversation from './NewConversation';


class Projects extends Component {
 constructor(props) {
   super(props);
   this.displayProjects = this.displayProjects.bind(this);
   this.toggleProject = this.toggleProject.bind(this);
   this.view = this.view.bind(this);
   this.addProject = this.addProject.bind(this);
   this.projectForm = this.projectForm.bind(this);
   this.toggleAdd = this.toggleAdd.bind(this);
   this.showForm = this.showForm.bind(this);
   this.state = { projects: [],
                  project: false,
                  conversationView: false,
                  addform: false
                };
 }

  componentWillMount() {
     let url;
     if(this.props.profileId)
       url = `/api/profiles/${this.props.profileId}/projects/`;
     else
       url = '/api/all_projects';
     $.ajax({
       url: url,
       type: 'GET',
       dataType: 'JSON'
     }).done( data => {
       this.setState({ projects: data });
     }).fail(data => {
       console.log(data);
     });
 }


toggleProject() {
  this.setState({ project: !this.state.project });
}


 addProject(e) {
   e.preventDefault();
   let name = this.refs.name.value;
   let description = this.refs.description.value;
   let active = this.refs.active.value;
   $.ajax({
     url: `/api/profiles/${this.props.profileId}/projects/`,
     type: 'POST',
     data: { project: {  name, description, active }},
     dataType: 'JSON'
   }).done (data => {
     let projects = this.state.projects;
     projects.push(data);
     this.setState({ projects: projects });
     this.refs.form.reset();
   }).fail(data => {
     console.log(data)
   });
 }

 toggleProject() {
   this.setState({
     project: !this.state.project
   });
 }

 toggleAdd() {
   this.setState({ toggleAdd: !this.state.toggleAdd });
 }

 showForm() {
   this.setState({ addform: !this.state.addform });
 }


 projectForm() {
   let addbtn = this.state.addform ? 'HIDE' : 'ADD PROJECT';
   if(this.props.currentUser === parseInt(this.props.profileId)){
   return(
     <div className="row">
       <button className='btn' onClick={this.showForm} data-toggle='collapse' aria-expanded='false' aria-controls='hideForm' data-target='#hideForm'>
          {addbtn}
        </button>

       <form onSubmit={ this.addProject } ref='form' className='col-xs-12 col-sm-4 collapse' id='hideForm'>
         <dl className='dl-horizontal'>
           <dt> Project Name </dt>
           <dd>
             <input className='form-control' ref='name' type='text' />
           </dd>
           <dt> Description </dt>
           <dd><input className='form-control'
             ref='description' type='text' />
         </dd>
         <dt> Active Project </dt>
         <dd><input type='checkbox' ref='active' /></dd>

       </dl>
       <input type='submit' className='btn btn-primary btn-xs' />
     </form>
   </div>

  )}
 }

 view(projectUser, description) {
   if (this.state.conversationView) {
     return (
       <div>
         <div className="modal-body">
           <NewConversation sentTo={projectUser}/>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
           <button
             onClick={() => { this.setState({ conversationView: false }) }}
             type="button"
             className="btn btn-primary"
           >
             Back
           </button>
         </div>
       </div>
     )
   } else {
      return (
       <div>
         <div className="modal-body">
           <p><strong>Description:</strong> {description}</p>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
           { this.props.currentUser === projectUser ? null
             :
             <button
               onClick={() => { this.setState({ conversationView: true })} }
               type="button"
               className="btn btn-primary"
             >
               Request to Collab
             </button>
           }
         </div>
       </div>
     )
   }
 }


 displayProjects() {
   let projects = this.state.projects.map( project => {
      return(<li className="list-unstyled" key={project.id}>
             <div>
               <div className='jumbotron' style={styles.hover1} onClick={this.toggleProject} data-toggle="modal" data-target={"#project-" + project.id}>
                 <h3>
                 {project.name}
                 </h3>
                 <p><strong>Tags:</strong> {project.description}</p>
                 <button className="btn btn-primary">More Info</button>
               </div>
               <div className="modal fade" id={"project-" + project.id} >
                 <div className="modal-dialog">
                   <div className="modal-content">
                     <div className="modal-header">
                       <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                       <h4 className="modal-title">{project.name}</h4>
                     </div>
                     {this.view(project.project_user, project.description)}
                   </div>
                 </div>
               </div>
             </div>
            </li>
           );
   });
   return projects;
 }

 render() {
     return(
       <div>
        { this.projectForm() }
         <ul>
           { this.displayProjects() }
         </ul>
       </div>
     )
   }
}


const styles = {
 hover1: {
   cursor: 'pointer'
 },
};

const mapStateToProps = (state) => {
  return { currentUser: parseInt(state.auth.id) }
}

export default connect(mapStateToProps)(Projects);
