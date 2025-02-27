import React from "react";
import edufoto from '../assets/images/edufoto.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={edufoto} alt="Foto de Eduardo" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/EduardoZafraMartin" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-zafra-martín-030277266" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="/CV_EduardoZafra.pdf" download="EduardoZafraMartinCV.pdf">
              <button>
                Descargar CV <i className="fa-solid fa-download"></i>
                <span className="overlay"></span>
              </button>
            </a>
          </div>
          <h1>Eduardo Zafra</h1>
          <p>Desarrollador Full Stack</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/EduardoZafraMartin" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-zafra-martín-030277266" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
