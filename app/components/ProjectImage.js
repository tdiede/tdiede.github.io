"use strict";

import React from 'react';

const projectImages = require('../../data/project_images.json');

class ProjectImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      i: 0,
      imagesList: [],
    };
  }
  render() {
    let images = this.state.imagesList.map( img =>
        <img key={ img.imageID } className='project-photo-feature' src={ img.url } onClick={ () => { this.nextImage() } } />
    );
    return (
        <div className='project-image'> {images[this.state.i]} </div>
    );
  }
}


export { ProjectImage as default };

// this.handleClick( projectsList[prjct].projectID )