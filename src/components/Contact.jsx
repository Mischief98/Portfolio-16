import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <>
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
      <div className='contact_main'>
        <div className='contact_in'>
          <div className='contact_img'></div>
          <div className='contact_info'>
            <h2>Contact Information</h2>
            <p><strong>Name:</strong> ParthaSarathi</p>
            <p><strong>Contact No:</strong> +91-7538810986</p>
            <p><strong>Email:</strong> psarathi959@gmail.com</p>
            <div className='social_links'>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-aos="fade-right"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-aos="fade-left"><i className="fab fa-facebook-f"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-aos="fade-right"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/Mischief98" target="_blank" rel="noopener noreferrer" data-aos="fade-left"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/mischief_98/" target="_blank" rel="noopener noreferrer" data-aos="fade-right"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;
