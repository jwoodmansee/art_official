import React, { Component } from 'react';
import { Link } from 'react-router';

class Projects extends Component {
 constructor(props) {
   super(props);
   this.displayProjects = this.displayProjects.bind(this);
   this.toggleProject = this.toggleProject.bind(this);
   this.state = { projects: [], project: false };
 }

 componentWillMount() {
     let url;
     if(this.props.profileId)
       url = `/api/profiles/${this.props.profileId}/projects`;
     else
       url = '/api/all_projects';
     $.ajax({
       url: url,
       type: 'GET',
       dataType: 'JSON'
     }).done(projects => {
       this.setState({projects});
     }).fail(data => {
       console.log(data);
     });
 }

 toggleProject() {
   this.setState({
     project: !this.state.project
   });
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
                     <div className="modal-body">
                       <p><strong>Description:</strong> {project.description}</p>
                     </div>
                     <div className="modal-footer">
                       <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                       <button type="button" className="btn btn-primary">Request to Collab</button>
                     </div>
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
       <h1>All Open Projects</h1>
       <hr />
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

export default Projects;
