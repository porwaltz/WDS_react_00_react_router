import React from 'react'
import Favourite from './Favourite'
import { Link } from "react-router-dom";
import './Documents.scss'
import './Home.scss'


export default function Home(){
    return (
        <article id="home" class="document">
            <section>
                <h1>
                    Recursos de enseñanza virtual para alumnos y docentes  
                </h1>
            </section>
            <section id="favourites" class="flex-row">
                <Link to="/comoHacerUnaMonografia" className="miniature" >
                    <Favourite 
                    title="Cómo Hacer una Monografia"
                    source="img01.jfif"
                    resume="Con esta guía podrás conocer cuáles son las características de una monografía para la universidad. Además, 
                    encontrarás algunas recomendaciones y herramientas para escribirla correctamente."/>
                </Link>
                <Link to="/bitacoraDelInvestigador" className="miniature" >
                    <Favourite 
                    title="Bitácora del Investigador"
                    source="img02.jfif"
                    resume="A partir de un proyecto de investigación terminado se lleva al lector a otros soportes digitales que conformarán una 
                    “bitácora del investigador”, que explica los primeros pasos que todo estudiante debería dar para la redacción de un trabajo 
                    y/o proyecto de investigación"/>
                </Link>
                <Link to="/nuevosLenguajesJuridicos" className="miniature" >
                    <Favourite 
                    title="Nuevos Lenguajes Jurídicos"
                    source="img03.jfif"
                    resume="La experiencia en sí se relata en un video corto, pensado para alojarse en un futuro repositorio fílmico de la 
                    Facultad de Derecho-UBA, en el que puedan registrarse y compartirse propuestas diversas de las y los docentes y ensanchar 
                    las herramientas para la enseñanza, en línea con las necesidades expuestas."/>
                </Link>

            </section>
            <section id="la-importancia" class="flex-col">
                <h2>La importancia de la enzeñanza virtual en derecho</h2>
                <p>De la importancia de la enseñanza virtual para las nuevas generaciones:
                Texto de andrea (pedagogía) -resumen o link, depende la extensión-</p>
            </section>
        </article>
    )
}

