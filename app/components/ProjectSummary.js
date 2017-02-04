"use strict";

import React from 'react';

const ProjectSummary = (props) => (
                                  <li className='project'>
                                    <a href='#projects'>
                                      <img className='project-photo-thumbs' src={ props.src } id={ props.id } onClick={ props.update } />
                                      <div className='project-summary'>
                                        <h3>{ props.title }</h3>
                                        <p>{ props.summary }</p>
                                      </div>
                                    </a>
                                  </li>
                                  )

export { ProjectSummary as default };
