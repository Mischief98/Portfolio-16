import React from 'react';
import { NavLink } from 'react-router-dom';
import profileImage from "../images/img2.JPG";
import { FaInstagram, FaLinkedin, FaEnvelope, FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div className='home_body'>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">mischief.</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/"><i className="fas fa-home"></i></NavLink>
              <NavLink className="nav-link" to="/about"><i className="fas fa-user"></i></NavLink>
              <NavLink className="nav-link" to="/projects"><i className="fas fa-briefcase"></i></NavLink>
              <NavLink className="nav-link" to="/resume"><i className="fas fa-file-alt"></i></NavLink>
              <NavLink className="nav-link" to="/contact"><i className="fas fa-envelope"></i></NavLink>
            </div>
          </div>
        </div>
      </nav>
      <div className='home-main'>
        <div className='home_image' data-aos="fade-right" data-aos-duration="1000">
          <img className='img1' src={profileImage} alt='Profile' />
        </div>
        <div className='home_content'>
          <div className='content1'>
            <div className='incontent1'><h2>Hello, I'm</h2></div>
            <div className='incontent2'>
              <h1 data-aos="fade-right">PARTHA SARATHI</h1>
            </div>
          </div>
          <div className='content1'>
            <h3>I'm a Frontend Developer</h3>
          </div>
          <div className='content1'>
            <p>I bring life to websites using my code</p>
            <div className='social-icons'>
              <a href="https://www.instagram.com/mischief_98/" target="_blank" rel="noopener noreferrer" className="social-icon" ><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/partha-sarathi-373449310/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
              <a href="mailto:psarathi959@gmail.com" className="social-icon"><FaEnvelope /></a>
            </div>
            <div className='content1'>
              <NavLink to="/projects" className='view-projects-button'>View Projects</NavLink>
            </div>
          </div>
        </div>
        <div className='cube'>
          <div className='front'></div>
          <div className='back'></div>
          <div className='right'></div>
          <div className='left'></div>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
