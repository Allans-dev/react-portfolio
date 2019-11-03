/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@material-ui/core';
import '../style/modal-styles.scss';

const Modal = ({ handleClose, show, children }) => {
  const toggleClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={toggleClassName}>
      <section className="modal-main">
        {children}
        <section className="skills" id="skills">
          <div className="row">
            <div id="skills-waypoint" className="skill-animation">
              <div className="circle-row cr-1">
                <div className="circle browser-circle">
                            Browser
                  <div className="skills-container browser-text-circle">
                    <span className="skill-item skill-html5">HTML5</span>
                    <span className="skill-item skill-css3">CSS3</span>
                    <span className="skill-item skill-chrome-ext">Chrome Extension</span>
                  </div>
                </div>
                <div className="circle dev-circle">
                            Dev-Tools
                  <div className="skills-container dev-text-circle">
                    <span className="skill-item skill-cpanel">cPanel</span>
                    <span className="skill-item skill-webpack">Webpack</span>
                    <span className="skill-item skill-github">Github</span>
                    <span className="skill-item skill-cli">CLI</span>
                    <span className="skill-item skill-mocha">Mocha</span>
                  </div>
                </div>
              </div>
              <div className="circle-row cr-2">
                <div className="circle fe-circle">
                            Front End
                  <div className="skills-container fe-text-circle">
                    <span className="skill-item skill-javascript">Javascript</span>
                    <span className="skill-item skill-reactjs">ReactJS</span>
                    <span className="skill-item skill-redux">Redux</span>
                    <span className="skill-item skill-react-router">React-Router</span>
                    <span className="skill-item skill-jquery">jQuery</span>
                  </div>
                </div>
                <div className="circle title-circle">Skills</div>
                <div className="circle db-circle">
                            Database
                  <div className="skills-container db-text-circle">
                    <span className="skill-item skill-mongodb">MongoDB</span>
                    <span className="skill-item skill-mysql">MySQL</span>
                    <span className="skill-item skill-mamp">MAMP</span>
                  </div>
                </div>
              </div>
              <div className="circle-row cr-3">
                <div className="circle be-circle">
                            Back End
                  <div className="skills-container be-text-circle">
                    <span className="skill-item skill-wordpress">Wordpress</span>
                    <span className="skill-item skill-nodejs">NodeJS</span>
                    <span className="skill-item skill-php">PHP</span>
                    <span className="skill-item skill-expressjs">ExpressJS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Button onClick={handleClose}>close</Button>
      </section>
    </div>
  );
};

export default Modal;
