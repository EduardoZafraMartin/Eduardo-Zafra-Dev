import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const frontendSkills = ["React", "JavaScript", "HTML5", "CSS3", "SASS"];
const backendSkills = ["PHP", "Python", "Java", "SQL"];
const aiSkills = ["OpenAI", "LangChain", "Hugging Face", "TensorFlow"];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
            <h1>Sobre mí</h1>
                <div className="skills-grid">
                    {/* Frontend */}
                    <div className="skill-card">
                        <FontAwesomeIcon icon={faReact} size="3x" className="icon"/>
                        <h3>Frontend</h3>
                        <p>Desarrollo de interfaces modernas y accesibles, optimizando la experiencia de usuario.</p>
                        <div className="skill-chips">
                            {frontendSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="skill-card">
                        <FontAwesomeIcon icon={faDatabase} size="3x" className="icon"/>
                        <h3>Backend & Databases</h3>
                        <p>Construyo APIs escalables, arquitecturas eficientes y sistemas robustos con bases de datos optimizadas.</p>
                        <div className="skill-chips">
                            {backendSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* AI & Automation */}
                    <div className="skill-card">
                        <FontAwesomeIcon icon={faRobot} size="3x" className="icon"/>
                        <h3>AI & Automation</h3>
                        <p>Implemento soluciones de IA y automatización para mejorar eficiencia y optimizar procesos empresariales.</p>
                        <div className="skill-chips">
                            {aiSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
