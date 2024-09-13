import React from 'react';
import { NavLink } from 'react-router-dom';

const handleResume= ()=>{
const fileUrl = `${process.env.PUBLIC_URL}/Partha sarathi resume.pdf`
const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Partha sarathi resume.pdf');
    
    
    document.body.appendChild(link);
    
   
    link.click();
    
    
    document.body.removeChild(link);
}
const Resume = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
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
      <div className='resume_main'>
        <div className='resume_inside_main'>
          <header className='resume_header'>
            <h1 data-aos="fade-right">Partha Sarathi</h1>
            <p className='taglinee' data-aos="fade-left">Frontend Developer</p>
            <p data-aos="fade-right">Email: <a href="mailto:psarathi959@gmail.com" data-aos="fade-left">psarathi959@gmail.com</a></p>
            <p data-aos="fade-right">Phone: 75388-10986</p>
            <p data-aos="fade-left">Location: Nagercoil</p>
          </header>
          <section className='resume_summary'>
            <h2 data-aos="fade-up-right">About Me</h2>
            <p data-aos="fade-up-right">I am a dedicated and skilled Front-End Developer with a strong foundation in creating dynamic, responsive, and visually appealing web applications. Proficient in Bootstrap, JavaScript, and React JS, I bring a comprehensive understanding of front-end development principles and best practices. My passion for coding is driven by a commitment to delivering seamless user experiences and innovative web solutions. I bring life to websites using my code.</p>
          </section>
          <section className='skills'>
            <h2>Skills</h2>
            <ul>
              <li data-aos="fade-up-right">React JS</li>
              <li data-aos="fade-up-left">JavaScript</li>
              <li data-aos="fade-up-right">Bootstrap</li>
              <li data-aos="fade-up-left">Responsive Web Design</li>
              <li data-aos="fade-up-right">HTML</li>
              <li data-aos="fade-up-left">CSS</li>
              <li data-aos="fade-up-right">Canva</li>
              <li data-aos="fade-up-left">Communication Skills</li>
            </ul>
          </section>
          <section className='certifications' data-aos="fade-down-right">
            <h2>Certifications</h2>
            <p>Frontend Development - Karka Software Academy</p>
          </section>
          <section className='projects' data-aos="fade-down-left">
            <h2>Projects</h2>
            <div className='project_item' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <h3>Swiggy Clone</h3>
              <p><strong>Technologies:</strong> HTML, CSS, Bootstrap, React JS</p>
              <p>The Swiggy Clone is a fully responsive and dynamic web application developed to mimic the functionalities of the popular food delivery service, Swiggy. This project showcases my skills in frontend development using HTML, CSS, Bootstrap, and React JS. It includes various features that enhance user experience and streamline the food ordering process.</p>
            </div>
            <div className='project_item' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <h3>Other Projects</h3>
              <p><strong>DIRECTONE:</strong> A webpage about tourism using HTML, CSS, Bootstrap, and Responsive Design</p>
              <p><strong>Quiz:</strong> A quiz page using HTML, CSS, JavaScript</p>
              <p><strong>TO-DO-LIST:</strong> A to-do list using HTML, CSS, JavaScript</p>
              <p><strong>NEON-CALCULATOR:</strong> A neon-themed calculator using HTML, CSS, JavaScript</p>
              <p><strong>Modern Login Page:</strong> A modern login page using HTML, CSS, and Responsive Design</p>
              <p><strong>E-commerce Website:</strong> A website for a hoodie brand using HTML, CSS, Bootstrap, React JS, and Responsive Design</p>
            </div>
          </section>
          <section className='education' data-aos="fade-down-left">
            <h2>Education</h2>
            <div className='education_item' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
              <h3>PARK COLLEGE OF ENGINEERING AND TECHNOLOGY</h3>
              <p><strong>Degree:</strong> Bachelor of Engineering in Mechanical</p>
              <p><strong>Year:</strong> 2020</p>
            </div>
            <div className='education_item' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
              <h3>HIGH SCHOOL, Kanyakumari</h3>
              <p><strong>Year:</strong> 2016</p>
            </div>
          </section>
          <section className='languages' data-aos="fade-down-right">
            <h2>Languages</h2>
            <ul>
              <li data-aos="fade-up-right">Tamil</li>
              <li data-aos="fade-up-left">English</li>
            </ul>
          </section>
        </div>
      </div>
      <div className='download_section' onClick={handleResume}>
        <a href="YOUR_DIRECT_DOWNLOAD_LINK_HERE" download className='download_button'>
          Download Resume
        </a>
      </div>
    </>
  );
}

export default Resume;
