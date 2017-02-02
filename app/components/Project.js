"use strict";

import React from 'react';
import ProjectDetails from './ProjectDetails.js';
import ProjectImage from './ProjectImage.js';
import ProjectImageGallery from './ProjectImageGallery.js';
import ProjectImageCaption from './ProjectImageCaption.js';


const projectImages = require('../../data/project_images.json');


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: props.currentProject,
      i: 0,
      imagesList: [],
    };
    // this binding is necessary to make `this` work in the callback
    this.nextImage = this.nextImage.bind(this);
    this.particularImage = this.particularImage.bind(this);
  }
  componentWillMount() {
    console.log('Component will mount.');
    console.log("Just clicked (project): " + this.props.current);
  }
  componentDidMount() {
    console.log('Component did mount.');
    let current = this.state.current;
    this.setState({ imagesList:projectImages[current] });
    this.shiftTimer = setInterval(
        () => this.nextImage(), 5000
    );
  }
  componentWillUnmount() {
    console.log('Component will unmount.');
    clearInterval(this.shiftTimer);
  }
  nextImage() {
      let len = this.state.imagesList.length;
      console.log("I have " + len + " images for this project.");
      this.setState(prevState => ({
          i: (this.state.i + 1) % len,
      }));
      console.log(this.state.i);
  }
  particularImage(value) {
      this.setState(prevState => ({
          i: value,
      }));
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
