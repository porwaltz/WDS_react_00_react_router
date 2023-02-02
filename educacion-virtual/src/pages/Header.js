import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';


export default function Header(){
    return(
        <nav id='header'>
            <div class="image-container">
                <img src={require('./img/banner-blanco.png')} alt="banner"></img>
            </div>
            <ul>
                <li class="dropdown">
                    <button class="dropbtn">Cómo escribir A textos académicos</button>
                    <div class="dropdown-content">
                        <Link to="/WDS_react_00_react_router/produccionDeMateriales">Acerca de esta sección</Link>
                        <Link to="/WDS_react_00_react_router/comoHacerUnaMonografia">Cómo hacer una monografia</Link>
                        <Link to="/WDS_react_00_react_router/comoEmpezarARedactar">Cómo empezar a redactar</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn">Primeros pasos en investigación</button>
                    <div class="dropdown-content">
                        <Link to="/WDS_react_00_react_router/comoInvestigar">Acerca de esta sección</Link>
                        <Link to="/WDS_react_00_react_router/investigacionParaEstudiantes">Investigación para estudiantes</Link>
                        <Link to="/WDS_react_00_react_router/bitacoraDelInvestigador">Bitácora del investigador</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn">Videoteca de experiencias docentes</button>
                    <div class="dropdown-content">
                        <Link to="/WDS_react_00_react_router/nuevosLenguajesJuridicos">Investigar en materias codificadas</Link>
                        <Link to="/WDS_react_00_react_router/comoEvitarElPlagio">Cómo evitar el plagio</Link>
                        <Link to="/WDS_react_00_react_router/exploracionDeCulturasJuridicas">Exploración de culturas jurídicas</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn"><Link to="/WDS_react_00_react_router/ented">Ented</Link></button>
                </li>
            </ul>
        </nav>
    )
}

