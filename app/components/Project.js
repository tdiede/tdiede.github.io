"use strict";

import React from 'react';
import ProjectDetails from './ProjectDetails.js';
import ProjectImage from './ProjectImage.js';
import ProjectImageGallery from './ProjectImageGallery.js';
import ProjectImageCaption from './ProjectImageCaption.js';


const projectsList = require('../../data/projects.json');

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: props.currentProject,
    };
  }
  render() {
    return (
            <div className='project-details col-lg-12 col-md-12 col-sm-12 col-xs-12 row'>

                <div className='wrap-project-container col-lg-6 col-md-6 col-lg-push-6 col-md-push-6'>
                    { this.state.currentProject !== null &&
                        <ProjectDetails current={this.state.currentProject} />
                    }
                    <div className='wrap-footer'>
                      { this.state.currentProject !== null &&
                          <ProjectImageGallery current={this.state.currentProject} />
                      }
                      { this.state.currentProject !== null &&
                          <ProjectImageCaption current={this.state.currentProject} />
                      }
                    </div>
                </div>

                <div className='wrap-image-container col-lg-6 col-md-6 col-lg-pull-6 col-md-pull-6'>
                    { this.state.currentProject !== null &&
                        <ProjectImage current={this.state.currentProject} />
                    }
                </div>
              
            </div>
    );
  }
}


export { Project as default };
