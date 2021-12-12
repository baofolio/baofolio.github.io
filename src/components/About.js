import React from 'react';
import logo from '../images/logo.svg';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly mr-8 ml-8 mb-4 md:mb-16">
      <div className="flex flex-col space-y-12 w-auto md:w-3/4">
        <div className="text-3xl md:text-7xl">
          <p>
            Hello, I'm
          </p>
          <div>
            <span id="intro-name">Bao Nguyen</span>
          </div>
        </div>
        <p className="text-base md:text-2xl w-auto">
          I'm a Computer Science student from the University of Washington
          and a web developer. I have a deep passion for developing
          software that helps to solve real-world problems and empowers others.
          I also enjoy learning and playing with new technologies.
        </p>
      </div>
      <div>
        <img src={logo} className="logo-image" alt="Logo" />
      </div>
    </div>
  );
}

export default About;
