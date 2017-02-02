"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ProjectGrid from './components/ProjectGrid.js';
import Clock from './components/Clock.js';


class App extends React.Component {
  render() {
    const header = projectsHeader();
    return (
      <div>
        {header}
        <ProjectGrid />
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
