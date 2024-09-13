import React from 'react';
import { NavLink } from 'react-router-dom';
import profileImage2 from "../images/img1.JPEG";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaLinkedin, FaNodeJs } from 'react-icons/fa';

const About = () => {
  return (
    <>
    <body className='about_body'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">mischief.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link nav-items" to="/"><i className="fas fa-home"></i></NavLink>
              <NavLink className="nav-link nav-items" to="/about"><i className="fas fa-user"></i></NavLink>
              <NavLink className="nav-link nav-items" to="/projects"><i className="fas fa-briefcase"></i></NavLink>
              <NavLink className="nav-link nav-items" to="/resume"><i className="fas fa-file-alt"></i></NavLink>
              <NavLink className="nav-link nav-items" to="/contact"><i className="fas fa-envelope"></i></NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className="about-container">
        <div className="about-content" >
          <div className="about-text">
            <h1 data-aos="fade-left">About Me</h1>
            <p>Hello! I'm Partha Sarathi, a passionate Frontend Developer with a keen eye for design and a drive to create engaging and user-friendly websites. I specialize in HTML, CSS, JavaScript, and React, and I'm always eager to learn and explore new technologies.</p>
            <h2 className='about_h2' data-aos="fade-right">Skills</h2 >
            <div className="skills" data-aos="fade-right">
              <div className="skill">
                <FaHtml5 className="skill-icon1" data-aos="fade-right"/>
                <h3>HTML5</h3>
              </div>
              <div className="skill">
                <FaCss3Alt className="skill-icon2"/>
                <h3>CSS3</h3>
              </div>
              <div className="skill">
                <FaJs className="skill-icon3"/>
                <h3>JavaScript</h3>
              </div>
              <div className="skill">
                <FaReact className="skill-icon4"  />
                <h3>React.js</h3>
              </div>
              <div className="skill">
                <FaBootstrap className="skill-icon5" />
                <h3>Bootstrap</h3>
              </div>
              <div className="skill">
                <FaGithub className="skill-icon6"/>
                <h3>Github</h3>
              </div>
              <div className="skill">
                <FaNodeJs className="skill-icon7"/>
                <h3>NodeJs</h3>
              </div>
            </div>
            <h2 className='edu_h2' data-aos="fade-right">Education</h2 >
            <p>Bachelor of Engineering in Mechanical - 2020</p>
            <p>High School - 2016</p>
            <h2 className='hob_h2' data-aos="fade-left">Hobbies & Interests</h2>
            <p>I enjoy exploring new web technologies, designing engaging user interfaces, and contributing to open-source projects. In my free time, I love reading tech blogs, watching sci-fi movies, and experimenting with creative coding projects.</p>
            <div className="social-links" data-aos="fade-right">
              <a href="https://www.linkedin.com/in/partha-sarathi-373449310/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
          <div className="about-image">
            <img src={profileImage2} alt="Partha Sarathi" />
          </div>
        </div>
      </div>
      </body>
    </>
  );
};

export default About;
