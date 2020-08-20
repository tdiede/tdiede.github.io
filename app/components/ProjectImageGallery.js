"use strict";

import React from 'react';

const projectImages = require('../../data/project_images_jquery.json');

class ProjectImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      i: 0,
    };
  }
  render() {
    let current = this.props.current;
    let imagesList = projectImages[current].slice(this.state.i + 1);
    console.log('images in gallery should be: ' + imagesList);
    let gallery = imagesList.map( img =>
        <img key={ img.imageID } className='gallery-photo' src={ img.url } onClick={ () => {} } />
    );
    return (
      <div className='gallery-container'>
        <div className='project-gallery'> {gallery} </div>
      </div>
    );
  }
}


export { ProjectImageGallery as default };
