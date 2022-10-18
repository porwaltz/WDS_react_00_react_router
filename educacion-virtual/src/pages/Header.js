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
                    <button class="dropbtn">Cómo escribir textos académicos</button>
                    <div class="dropdown-content">
                        <Link to="/produccionDeMateriales">Acerca de esta sección</Link>
                        <Link to="/comoHacerUnaMonografia">Cómo hacer una monografia</Link>
                        <Link to="/comoEmpezarARedactar">Cómo empezar a redactar</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn">Primeros pasos en investigación</button>
                    <div class="dropdown-content">
                        <Link to="/comoInvestigar">Acerca de esta sección</Link>
                        <Link to="/investigacionParaEstudiantes">Investigación para estudiantes</Link>
                        <Link to="/bitacoraDelInvestigador">Bitácora del investigador</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn">Videoteca de experiencias docentes</button>
                    <div class="dropdown-content">
                        <Link to="/nuevosLenguajesJuridicos">Investigar en materias codificadas</Link>
                        <Link to="/comoEvitarElPlagio">Cómo evitar el plagio</Link>
                        <Link to="/exploracionDeCulturasJuridicas">Exploración de culturas jurídicas</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn"><Link to="/ented">Ented</Link></button>
                </li>
            </ul>
        </nav>
    )
}

