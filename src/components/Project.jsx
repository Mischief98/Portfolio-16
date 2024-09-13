import React from 'react';
import { NavLink } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Swiggy-Clone', description: 'A React-based food delivery app that mimics Swiggy"s core features.', imageUrl: 'https://miro.medium.com/v2/resize:fit:1358/1*F06tU68zmGYzY-C3t0_OiQ.png', link: 'https://swiggy-sarathi16-2024.netlify.app/' },
  { id: 2, title: 'Stop-Watch', description: 'A React-based stopwatch application with a sleek interface.', imageUrl: 'https://i.ytimg.com/vi/JXCCt05AdvU/sddefault.jpg', link: 'https://sarathi-stopwatch-react.netlify.app/' },
  { id: 3, title: 'Neon-Calendar', description: 'A vibrant React-based neon calendar with dynamic updates.', imageUrl: 'https://cdn.dribbble.com/userupload/10016146/file/original-932f9b9a67aa6ff1e7bb7782cd4e29ec.png?resize=752x', link: 'https://sarathi-neoncalander-react.netlify.app/' },
  { id: 4, title: 'Slaang', description: 'A stylish e-commerce website for hoodies using HTML, CSS, and JS.', imageUrl: 'https://cdn.dribbble.com/userupload/12668301/file/original-5935a7f00950c9fb56891ade17e7b74d.png?resize=400x0', link: 'https://your-slaang-link.com' },
  { id: 5, title: 'Calculator', description: 'A sleek, neomorphic-style calculator created using HTML, CSS, and JS.', imageUrl: 'https://repository-images.githubusercontent.com/259745540/404ad580-8995-11ea-8ccf-773e29c5dba8', link: 'https://your-calculator-link.com' },
  { id: 6, title: 'Directone', description: 'A visually appealing tourism landing page using HTML and CSS.', imageUrl: 'https://s3-alpha.figma.com/hub/file/1112919872/2ff0c52f-c4f4-48ef-9dea-6893d8f96ad2-cover.png', link: 'https://your-directone-link.com' },
  { id: 7, title: 'To-do App', description: 'A to-do list app built with HTML, CSS, JS, and DOM manipulation.', imageUrl: 'https://cdn.dribbble.com/users/4592078/screenshots/17090922/media/04009ec0435422129548a67a25c0c25c.png?resize=400x0', link: 'https://your-todo-app-link.com' },
  { id: 8, title: 'Tic-Tac-Toe', description: 'A Tic-Tac-Toe game in React with state management and reset functionality.', imageUrl: 'https://easyshiksha.com/online_courses/assets/games/tic-tac-toe/images/page_1.png', link: 'https://xoxo-arena-16.netlify.app/' },
];

const Projects = () => {
  return (
    <div className='project_body'>
      <nav className="navbar navbar-expand-lg glassy-navbar">
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
      <div className="projects-page">
        <h1 className="page-title">My Projects</h1>
        <div className="projects-container">
          {projects.map(project => (
            <div key={project.id} className="project-card" data-aos="zoom-out-down">
              <img src={project.imageUrl} alt={project.title} className="project-image"/>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View</a>
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
