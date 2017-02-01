"use strict";

import React from 'react';

const projectsList = require('../../data/projects.json');


class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
  }
  componentWillMount() {
    // called the first time the component is loaded, right before component is added to page
  }
  componentDidMount() {
    // called after component has been rendered onto the page
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
  render() {
    console.log("just clicked: " + this.props.current);
    let current = this.props.current;
    let prjct = projectsList[current];


    return (
          <div className='project-text'>
            <h2>{ prjct.title }</h2>
            <h4>{ prjct.date }</h4>
            <br />
            <br />
            { prjct.description && <p>{ prjct.description }</p> }
            { prjct.problem && <p>{ prjct.problem }</p> }
            { prjct.solution && <p>{ prjct.solution }</p> }
            { prjct.future && <p>{ prjct.future }</p> }
            <br />
            { prjct.partners && <h4>{ prjct.partners }</h4> }
            { prjct.techstack && <h4>{ prjct.techstack }</h4> }
            <br />
            <br />
            { prjct.github && <a href={prjct.github}>{ prjct.github }</a> }
            <br />
            { prjct.deployed && <a href={prjct.deployed}>{ prjct.deployed }</a> }
            <br />
          </div>
    );
  }
}


export { ProjectDetails as default };
