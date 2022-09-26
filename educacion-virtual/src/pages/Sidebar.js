import React from 'react';
import { Link } from "react-router-dom";
import './Sidebar.scss';

function Sidebar(){
    return(
        <aside class="sidebar">
            <nav class="nav">
                <ul>
                    <li class="side-item active"><Link to="/">Cómo redactar una monografía</Link></li>
                    <li class="side-item"><Link to="/">Cómo hacer un proyecto de investigación</Link></li>
                    <li class="side-item"><Link to="/">Experiencia docente en educación digital</Link></li>
                    <li class="side-item"><Link to="/bitacoraDelInvestigador">Bitácora del investigador</Link></li>
                </ul>
            </nav>
        </aside>
    )}

export default Sidebar;