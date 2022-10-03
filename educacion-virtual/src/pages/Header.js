import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';


export default function Header(){
    return(
        <nav id='header'>
            <div class="image-container">
                <img src={require('./img/banner-antique.png')} alt="banner"></img>
            </div>
            <ul>
                <li class="dropdown">
                    <button class="dropbtn">Escritura académica y lenguaje claro</button>
                    <div class="dropdown-content">
                        <a href="/#">Acerca de esta sección</a>
                        <a href="/#">Cómo hacer una monografia</a>
                        <Link to="/comoEvitarElPlagio">Cómo evitar el plagio</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn">Cómo investigar</button>
                    <div class="dropdown-content">
                        <Link to="/comoInvestigar">Acerca de esta seccion</Link>
                        <a href="/#">Investigación para estudiantes</a>
                        <Link to="/bitacoraDelInvestigador">Bitácora del investigador</Link>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn"><Link to="/nuevosLenguajesJuridicos">Cómo y por qué enseñar Derecho</Link></button>
                </li>
            </ul>
        </nav>
    )
}

