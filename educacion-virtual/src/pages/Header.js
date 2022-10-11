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
                        <Link to="/comoEvitarElPlagio">Cómo evitar el plagio</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn">Cómo investigar</button>
                    <div class="dropdown-content">
                        <Link to="/comoInvestigar">Acerca de esta seccion</Link>
                        <Link to="/investigacionParaEstudiantes">Investigación para estudiantes</Link>
                        <Link to="/bitacoraDelInvestigador">Bitácora del investigador</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn"><Link to="/nuevosLenguajesJuridicos">Cómo y por qué enseñar Derecho</Link></button>
                </li>
                <li class="dropdown">
                    <button class="dropbtn"><Link to="/">Ented</Link></button>
                </li>
            </ul>
        </nav>
    )
}

