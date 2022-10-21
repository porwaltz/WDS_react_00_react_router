import React from 'react';
import { Link } from "react-router-dom";
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHome, faGraduationCap, faCalendar, faDesktop, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar(){
    return(
        <aside class="sidebar">
            <nav class="nav">
                <ul>
                    <li class="side-item active"><Link to="/"><FontAwesomeIcon icon={faHome} color="white"/> Inicio</Link></li>
                    <li class="side-item"><a href="http://www.derecho.uba.ar/" target="_blank"><FontAwesomeIcon icon={faGlobe} color="white"/> Derecho UBA</a></li>
                    <li class="side-item"><Link to="/cuerpoDocente"><FontAwesomeIcon icon={faGraduationCap} color="white" /> Cuerpo Docente</Link></li>                    
                    <li class="side-item"><a href="https://www.ented.net/" target="_blank"><FontAwesomeIcon icon={faGlobe} color="white"/> Ented</a></li>
                    <li class="side-item"><a href="http://www.derecho.uba.ar/campusvirtual/" target="_blank"><FontAwesomeIcon icon={faBook} color="white" /> Campus Virtual</a></li>
                    <li class="side-item"><a href="https://3w.derecho.uba.ar/" target="_blank"><FontAwesomeIcon icon={faGraduationCap} color="white" /> SIU-Guaraní</a></li>
                    <li class="side-item"><a href="http://www.derecho.uba.ar/academica/calendario_academico.php" target="_blank"><FontAwesomeIcon icon={faCalendar} color="white" /> Calendario Académico</a></li>
                    <li class="side-item"><a href="http://www.derecho.uba.ar/biblioteca/virtual/" target="_blank"><FontAwesomeIcon icon={faDesktop} color="white" /> Biblioteca Virtual</a></li>
                </ul>
            </nav>
        </aside>
    )}

