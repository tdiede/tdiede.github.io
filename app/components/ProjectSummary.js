"use strict";

import React from 'react';

const projectsList = require('../../data/projects.json');


class ProjectSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: props.id,
          src: props.src,
          title: props.title,
          summary: props.summary,
        };
        // this binding is necessary to make `this` work in the callback
        this.update = this.update.bind(this);
    }
    update(value) {
        console.log(value);
        let project = projectsList[value];
        console.log(project);
    }
    render() {
        let id = this.state.id;
        return (
            <a href='#projects' key={id} onClick={ () => { this.update({id}) } }>
                <li className='project'>
                    <img className='project-photo-thumbs' src={ this.state.src } />
                    <div className='project-summary'>
                      <h3>{ this.state.title }</h3>
                      <p>{ this.state.summary }</p>
                    </div>
                </li>
            </a>
        )
    }
}


export { ProjectSummary as default };
