"use strict";

import React from 'react';
import Project from './Project.js';
import ProjectSummary from './ProjectSummary.js';

const projectsList = require('../../data/projects.json');


class ProjectGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
      currentProject: null,
      projectKeys: [],
    };
    // this binding is necessary to make `this` work in the callback
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  update(value) {
    this.setState({currentProject: value});
    console.log(this.state.currentProject);
  }
  componentWillMount() {
    // called the first time the component is loaded, right before component is added to page
    console.log('Component will mount.');
  }
  componentDidMount() {
    // called after component has been rendered onto the page
    console.log('Component did mount.');
    let projectKeyList = Object.keys(projectsList).map( prjct => prjct );
    this.setState({ projectKeys:projectKeyList });
  }
  componentWillReceiveProps(nextProps) {
    // called when props provided to the component are changed
  }
  componentWillUpdate(nextProps,nextState) {
    // called when props and/or state change
  }
  componentWillUnmount() {
    // called when the component is removed
    console.log('Component will unmount.');
  }
  handleClick() {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
    console.log(this.state.isExpanded);
  }
  update(value) {
    console.log(value);
  }
  render() {
    let projects = this.state.projectKeys.map( key => {
          let prjct = projectsList[key];
          return (
              <ProjectSummary
                  key={key}
                  id={prjct.projectID}
                  src={prjct.thumbURL}
                  title={prjct.title}
                  summary={prjct.summary} />
          );
    });
    return (
            <div className='row wrap-content'>

                { this.state.currentProject !== null &&
                   <Project currentProject={ this.state.currentProject } />
                }

                <ul className='project-container'>
                  <div className='grid-content'>
                    {projects}
                  </div>
                </ul>

            </div>
    );
  }
}


export { ProjectGrid as default };
