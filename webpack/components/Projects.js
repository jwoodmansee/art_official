import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NewConversation from './NewConversation';
import categoryOptions from './categoryOptions';


class Projects extends Component {
 constructor(props) {
   super(props);
   this.displayProjects = this.displayProjects.bind(this);
   this.toggleProject = this.toggleProject.bind(this);
   this.view = this.view.bind(this);
   this.addProject = this.addProject.bind(this);
   this.projectForm = this.projectForm.bind(this);
   this.showForm = this.showForm.bind(this);
   this.generateCategoryOptions = this.generateCategoryOptions.bind(this);
   this.artStyle = this.artStyle.bind(this);
   this.displayProfileProjects = this.displayProfileProjects.bind(this);
   this.state = { projects: [],
                  categories: {},
                  project: false,
                  conversationView: false,
                  addform: false,
                  category: false,
                  currentuser: false,
                  selectedCategories: {
                    music: [],
                    photography: [],
                    videography: [],
                    muralist: [],
                    painting: [],
                    drawing: [],
                    sculpture: [],
                    graphic_design: [],
                    performance: [],
                    literature: [],
                    hand_made: []
                  }
                };
    this.categoryOptions = categoryOptions();
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
       dataType: 'JSON',
     }).done( projects => {
       this.setState({ projects });
     }).fail(data => {
       console.log(data);
     });
 }

toggleProject() {
  this.setState({ project: !this.state.project });
}

currentUser() {
  this.setState({ currentuser: !this.state.currentuser });
}

toggleCategory() {
  this.setState({ category: !this.state.category });
}

 addProject(e) {
   e.preventDefault();
   let name = this.refs.name.value;
   let description = this.refs.description.value;
   let active = this.refs.active.value;
   $.ajax({
     url: `/api/profiles/${this.props.profileId}/projects/`,
     type: 'POST',
     data: {project: {  name, description, active },
            cat: this.state.selectedCategories
            },
     dataType: 'JSON'
   }).done (data => {
     let projects = this.state.projects;
     projects.push(data);
     this.setState({ projects: { data }});
     this.setState({ addform: false });
   }).fail(data => {
     console.log(data)
   });
 }


 showForm() {
   this.setState({ addform: !this.state.addform });
 }


  projectForm() {
    let addbtn = this.state.addform ? 'HIDE' : 'ADD PROJECT';
      return(
        <div className="row">
          <button className='btn' onClick={this.showForm} data-toggle='collapse' aria-expanded='false' aria-controls='hideForm' data-target='#hideForm'>
            { addbtn }
          </button>
          <div>
            <form onSubmit={ this.addProject } className='col-xs-12 col-sm-6 collapse' id='hideForm'>
              <dl className='dl-horizontal'>
                <dt> Project Name </dt>
                <dd>
                  <input className='form-control' ref='name' type='text' />
                </dd>
                <dt> Description </dt>
                <dd><textarea className='form-control' ref='description' type='text'></textarea></dd>
                <dt> Active Project </dt>
                <dd><input type='checkbox' ref='active' /></dd>
                <dt> Add Categories </dt>
                <dd> { this.artStyle() } </dd>
              </dl>
                <input type='submit' className='btn btn-primary btn-xs' />
            </form>
          </div>
        </div>
      )

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

 generateCategoryOptions(key) {
   let options = [];
   let selected = [];
   let userCategory = this.categoryOptions[key];
   userCategory.forEach( subCategory => {
     options.push({ value: subCategory, label: subCategory });
   });
   return options
 }

 updateSelected(val, key) {
   let obj = {};
   obj[key] = val.split(",");
   let newObj = Object.assign({}, this.state.selectedCategories, obj);
   this.setState({ selectedCategories: newObj })
 }


 artStyle() {
   let categoryDropdowns = Object.keys(this.categoryOptions).map( categoryKey => {
     let options = this.generateCategoryOptions(categoryKey)
     return(
       <div key={categoryKey}>
         <label className='text-capitalize'>{categoryKey.split("_").join(" ")}</label>
         <Select
           name="form-field-name"
           value={this.state.selectedCategories[categoryKey]}
           multi={true}
           options={options}
           onChange={ (val) => this.updateSelected(val, categoryKey) }
         />
       </div>
     );
   });
   return categoryDropdowns;
 }


  displayProfileProjects() {
    let projects = this.state.projects.map( project => {
      return(<li className="list-unstyled" key={project.id}>
               <h5> {project.name} </h5>
             </li>
            )
    });
    return projects;
  }


 displayProjects() {
   let projects = this.state.projects.map( project => {
     return(<li className="list-unstyled" key={project.id}>
              <h5> {project.name} </h5>
              <p> {project.description}</p>
            </li>
           )
   });
   return projects;
 }

  render() {
    if(this.props.currentUser === parseInt(this.props.profileId)) {
      return(
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            { this.projectForm() }
          </div>
          <div className='col-xs-12 col-sm-6'>
            { this.displayProfileProjects() }
          </div>
        </div>
      )
    } else {
      return(
        <div className='row'>
          <div className='col-xs-12'>
            { this.displayProjects() }
          </div>
        </div>
      )
    }
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
