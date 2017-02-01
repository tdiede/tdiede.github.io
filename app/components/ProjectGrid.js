"use strict";

import React from 'react';
import Project from './Project.js';

const projectsList = require('../../data/projects.json');

class ProjectGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
      currentProject: null,
    };
    // this binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    // called the first time the component is loaded, right before component is added to page
  }
  componentDidMount() {
    // called after component has been rendered onto the page
    // this.isExpanded = false;
    // this.currentProject = null;
  }
  componentWillReceiveProps(nextProps) {
    // called when props provided to the component are changed
  }
  componentWillUpdate(nextProps,nextState) {
    // called when props and/or state change
  }
  componentWillUnmount() {
    // called when the component is removed
  }
  handleClick(value) {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
    console.log(this.state.isExpanded);
    this.setState(prevState => ({
      currentProject: value
    }));
    console.log(this.state.currentProject);
  }
  render() {
    let projects = Object.keys(projectsList).map( prjct =>
      <a href='#projects' key={ prjct }><li className='col-lg-3 col-md-3 col-sm-6 col-xs-12 project' onClick={ () => {this.handleClick( projectsList[prjct].projectID )} }>
        <img className='project-photo-thumbs' src={ projectsList[prjct].thumbURL } />
        <div className='project-summary'>
          <h3>{ projectsList[prjct].title }</h3>
          <p>{ projectsList[prjct].summary }</p>
        </div>
      </li></a>
    );
    return (
            <div className='row'>

                { this.state.currentProject !== null &&
                   <Project currentProject={ this.state.currentProject } />
                }

                <div className='wrap-content col-lg-12 col-md-12 col-sm-12 col-xs-12 row'>
                    <div className='fit-grid-content'>
                    <ul className='project-container'>
                        { projects }
                    </ul>
                    </div>
                </div>

            </div>
    );
  }
}


export { ProjectGrid as default };
