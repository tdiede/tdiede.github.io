"use strict";

import React from 'react';

const projectsList = require('../../data/projects_jquery.json');


class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
  }
  render() {
    let prjct = projectsList[this.props.current];
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
