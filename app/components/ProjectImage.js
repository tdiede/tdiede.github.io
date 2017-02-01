"use strict";

import React from 'react';

const projectImages = require('../../data/project_images.json');

class ProjectImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      i: 0,
    };
  }
  render() {
    console.log("just clicked: " + this.props.current);
    let current = this.props.current;
    let imagesList = projectImages[current];
    let images = imagesList.map( img =>
        <img key={ img.imageID } className='project-photo-feature' src={ img.url } onClick={ () => {} } />
    );
    console.dir(images);
    console.log(images);
    return (
        <div className='project-image'> {images[0]} </div>
    );
  }
}


export { ProjectImage as default };

// this.handleClick( projectsList[prjct].projectID )