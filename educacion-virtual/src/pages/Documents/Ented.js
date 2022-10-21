import React from 'react'
import './Documents.scss'
import './Ented.scss'
//import propTypes from 'prop-types'
//import { Link } from "react-router-dom";


export default function Ented(){
    return (
        <article id="ented" class="document">
            <h1>ENTED</h1>
            <h3>Exploratorio de Nuevas Tecnologías, Educación y Derecho.</h3>
            <a href="https://www.ented.net/" target="_blank">
                <img src={require("../img/img03.jpg")} alt="Ented"/>
            </a>
            <p>
                El Exploratorio de Nuevas Tecnologías, Educación y Derecho (ENTED) se creó como un espacio virtual 
            destinado a la publicación de trabajos académicos interdisciplinarios que vinculan la tecnología, la educación y el derecho, 
            la difusión de novedades y eventos relacionados con estos tres ejes temáticos, y el intercambio y conexión con proyectos afines.
            </p>
            <div>
                <a id="goto" href="https://www.ented.net/" target="_blank"> -> IR AL SITIO</a>
            </div>
        </article>
    )
}