"use strict";

import React from 'react';
// import ProjectSummary from './ProjectSummary.js';


class ProjectGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.projectComponents);
    let projectComponents = this.props.projectComponents;
    return (
            <div className='row wrap-content'>

                <ul className='row project-container'>
                  <div className='grid-content'>
                    {projectComponents}
                  </div>
                </ul>

            </div>
    );
  }
}

export { ProjectGrid as default };
