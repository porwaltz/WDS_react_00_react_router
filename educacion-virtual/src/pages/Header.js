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
                        <Link to="/comoEmpezarARedactar">Como empezar a redactar</Link>
                        <Link to="/comoEvitarElPlagio">Cómo evitar el plagio</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn">Primer contacto con la investigación</button>
                    <div class="dropdown-content">
                        <Link to="/comoInvestigar">Acerca de esta seccion</Link>
                        <Link to="/investigacionParaEstudiantes">Investigación para estudiantes</Link>
                        <Link to="/bitacoraDelInvestigador">Bitácora del investigador</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn"><Link to="/nuevosLenguajesJuridicos">Videoteca de experiencias docentes</Link></button>
                </li>
                <li class="dropdown">
                    <button class="dropbtn"><Link to="/ented">Ented</Link></button>
                </li>
            </ul>
        </nav>
    )
}

