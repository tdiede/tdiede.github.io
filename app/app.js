"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Project from './components/Project.js';
import ProjectSummary from './components/ProjectSummary.js';
import ProjectGrid from './components/ProjectGrid.js';
import Clock from './components/Clock.js';

const projectsList = require('../data/projects.json');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
      currentProject: null,
    };
    // this binding is necessary to make `this` work in the callback
    // this.update = this.update.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  update(e) {
    console.log(e.target.id);
    this.setState({currentProject: e.target.id});
  }
  render() {
    console.log(this.state.currentProject);
    const header = projectsHeader();
    const projects = Object.keys(projectsList).map( prjct => projectsList[prjct] );
    console.log(projects);
    const projectComponents = projects.map( prjct => {
          return (
              <ProjectSummary
                  key={prjct.projectID}
                  id={prjct.projectID}
                  src={prjct.thumbURL}
                  title={prjct.title}
                  summary={prjct.summary}
                  update={this.update.bind(this)} />
          );
    });
    console.log(projectComponents);
    return (
      <div>
        {header}

        { this.state.currentProject !== null &&
           <Project current={ this.state.currentProject } update={this.update} />
        }

        <ProjectGrid projectComponents={projectComponents} />
      </div>
    );
  }
}





ReactDOM.render(<App />,
    document.getElementById('projects')
);

ReactDOM.render(<Clock />,
    document.getElementById('clock')
);




function projectsTitle() {
  return <h2>Projects</h2>;
}

function projectsSubtitle() {
  return <p>These are my projects.</p>;
}

function projectsHeader() {
  const title = projectsTitle();
  const subtitle = projectsSubtitle();
  return (<div className='row header'>
    <hr className='orange-strip'/>
    {title}
    {subtitle}
  </div>);
}

