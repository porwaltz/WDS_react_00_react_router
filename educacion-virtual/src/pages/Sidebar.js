import React from 'react';
import './Sidebar.css';

function Sidebar(){
    return(
        <aside class="sidebar">
            <nav class="nav">
                <ul>
                    <li class="side-item active"><a href="/#">Cómo redactar una monografía</a></li>
                    <li class="side-item"><a href="/#">Cómo hacer un proyecto de investigación</a></li>
                    <li class="side-item"><a href="/#">Experiencia docente en educación digital</a></li>
                    <li class="side-item"><a href="/#">Bitácora del investigador</a></li>
                </ul>
            </nav>
        </aside>
    )}

export default Sidebar;