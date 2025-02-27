import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experiencia</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - actualidad"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">A2 Creación Digital</h3>
            <h4 className="vertical-timeline-element-subtitle">Tres Cantos, Madrid</h4>
            <p>
            Desarrollador de software encargado del diseño y desarrollo de soluciones full-stack, trabajando con tecnologías como PHP, Python, JavaScript, SQL y WordPress. Responsable de implementar funcionalidades en frontend y backend, optimizando la experiencia del usuario y la eficiencia del sistema.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Plexus Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">Madrid, Madrid</h4>
            <p>
            Implementación de procesos ETL utilizando SQL,
            Powershell, Talend, PowerCenter y Java para la
            extracción, transformación y carga de datos en la
            base de datos destino.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;