import React, { Component } from 'react';

class AddProject extends Component {

  render() {
    return(
      <form className='col-xs-12 col-sm-4'>
        <dl className='dl-horizontal'>
          <dt> project name </dt>
          <dd>
            <input className='form-control' ref='project-name' type='text'/>
          </dd>
          <dt> description </dt>
          <dd><input className='form-control'
                     ref='description' type='text'/>
          </dd>
          <dt> active project </dt>
          <dd><input type='checkbox' ref='active' /></dd>

        </dl>
        <input type='submit' className='btn btn-primary btn-xs' />
      </form>
    )
  }
}

export default AddProject;
