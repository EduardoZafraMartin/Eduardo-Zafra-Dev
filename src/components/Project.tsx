import React from "react";
import { Github } from "lucide-react"; // Importar el ícono de GitHub
import mock1 from '../assets/images/mock1.png';
import mock2 from '../assets/images/mock2.png';
import mock3 from '../assets/images/mock3.png';
import mock4 from '../assets/images/mock4.png';
import mock5 from '../assets/images/mock5.png';

import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Proyectos</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://capable-rabanadas-c854d4.netlify.app/index.html" target="_blank" rel="noreferrer">
                        <img src={mock1} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <div className="project-title">
                        <a href="https://capable-rabanadas-c854d4.netlify.app/index.html" target="_blank" rel="noreferrer">
                            <h2>Frontend Store</h2>
                        </a>
                    </div>
                    <p>Web diseñada con HTML5 y CSS de venta de camisetas Front-End (template)</p>
                </div>
                <div className="project">
                    <a href="https://clever-crepe-ec64ad.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={mock2} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <div className="project-title">
                        <a href="https://clever-crepe-ec64ad.netlify.app/" target="_blank" rel="noreferrer">
                            <h2>Marvel Series & Comics</h2>
                        </a>
                        <a href="https://github.com/EduardoZafraMartin/api-marvel" target="_blank" rel="noreferrer" className="github-icon">
                            <Github size={20} />
                        </a>
                    </div>
                    <p>Web creada con React JS y React Router para realizar peticiones externas a la API de Marvel.</p>
                </div>
                <div className="project">
                    <a href="https://quiet-empanada-54fbb8.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={mock3} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <div className="project-title">
                        <a href="https://quiet-empanada-54fbb8.netlify.app/" target="_blank" rel="noreferrer">
                            <h2>Freelancer Web</h2>
                        </a>
                    </div>
                    <p>Web diseñada con HTML5 y CSS para ofrecer servicios freelancer.</p>
                </div>
                <div className="project">
                    <a href="https://stirring-lamington-de4c8f.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={mock4} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <div className="project-title">
                        <a href="https://stirring-lamington-de4c8f.netlify.app/" target="_blank" rel="noreferrer">
                            <h2>TO-DO List</h2>
                        </a>
                        <a href="https://github.com/EduardoZafraMartin/list-todo" target="_blank" rel="noreferrer" className="github-icon">
                            <Github size={20} />
                        </a>
                    </div>
                    <p>Web diseñada con React JS y CSS para hacer peticiones externas a una API.</p>
                </div>
                <div className="project">
                    <a href="https://unrivaled-zabaione-cce19e.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={mock5} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <div className="project-title">
                        <a href="https://unrivaled-zabaione-cce19e.netlify.app/" target="_blank" rel="noreferrer">
                            <h2>Rick & Morty API</h2>
                        </a>
                        <a href="https://github.com/EduardoZafraMartin/rick-morty-web-api" target="_blank" rel="noreferrer" className="github-icon">
                            <Github size={20} />
                        </a>
                    </div>
                    <p>Web creada con React JS y React Router para realizar peticiones externas a la API de Rick & Morty.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
