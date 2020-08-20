"use strict";

import React from 'react';

const projectImages = require('../../data/project_images_jquery.json');

class ProjectImageCaption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      i: 0,
    };
  }
  render() {
    let current = this.props.current;
    let imagesList = projectImages[current];
    let captions = imagesList.map( img =>
      <p key={ img.imageID } className='project-caption'> { img.caption } </p>
    );
    return (
        <div className='caption-container'> {captions[0]} </div>
    );
  }
}


export { ProjectImageCaption as default };
