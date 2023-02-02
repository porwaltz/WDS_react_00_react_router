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
                    Recursos de enseñanza virtual  
                </h1>
            </section>
            <section id="favourites" class="flex-row">
                <Link to="/WDS_react_00_react_router/comoHacerUnaMonografia" className="miniature" >
                    <Favourite 
                    title="Cómo Hacer una Monografía"
                    source="img01.jfif"
                    resume="Con esta guía podrás conocer cuáles son las características de una monografía para la universidad. Además, 
                    encontrarás algunas recomendaciones y herramientas para escribirla correctamente."/>
                </Link>
                <Link to="/WDS_react_00_react_router/bitacoraDelInvestigador" className="miniature" >
                    <Favourite 
                    title="Bitácora del Investigador"
                    source="img02.png"
                    resume="A partir de un proyecto de investigación terminado se lleva al lector a otros soportes digitales que conformarán una 
                    “bitácora del investigador”, que explica los primeros pasos que todo estudiante debería dar para la redacción de un trabajo 
                    y/o proyecto de investigación"/>
                </Link>
                <Link to="/WDS_react_00_react_router/nuevosLenguajesJuridicos" className="miniature" >
                    <Favourite 
                    title="Investigar en materias codificadas"
                    source="img03.jfif"
                    resume="Un video corto, pensado para alojarse en un futuro repositorio fílmico de la 
                    Facultad de Derecho-UBA, en el que puedan registrarse y compartirse propuestas diversas de las y los docentes y ensanchar 
                    las herramientas para la enseñanza, en línea con las necesidades expuestas."/>
                </Link>

            </section>
            <section id="la-importancia" class="flex-col">
                <h2>La importancia de la enseñanza virtual en derecho</h2>
                <p>
                    El papel que desempeña el aula y la educación en general permite el advenimiento de derechos humanos alrededor de ciudadanos y 
                    ciudadanas en pleno proceso de formación. En el caso del nivel universitario, si bien no es obligatorio su transitar, 
                    debe establecer pautas que concuerden con las exigencias y demandas de la sociedad ubicándose en el marco del tiempo y el espacio. 
                </p>
                <p>
                    Internet existe hace más de cuarenta años y los grupos de investigación universitarios han sido actores fundamentales en su consolidación. 
                    El conocimiento ha dejado de estar en los libros, en un papel, sin posibilidad de interacción. 
                    Todos tenemos acceso a toda la información siempre que tengamos conexión, a elegir qué parte leer y hasta dónde seguir los hipervínculos. 
                </p>
                <p>
                    En el marco de la enseñanza en la universidad existen desigualdades en cuanto al acceso, uso y apropiación en los medios digitales, 
                    así como  en el desarrollo en las competencias digitales (tanto de alumnos como de docentes) necesarias para poder 
                    insertarse a posteriori en escenarios laborales digitales.  
                </p>
                <p>
                    Ante este panorama, el presente proyecto busca ser una propuesta para interactuar de manera activa y 
                    con espíritu crítico con los textos, eligiendo la manera de explorarlos y el recorrido a seguir.  
                    De allí la importancia de unir la conectividad de tipo tecnológica con la cognitiva y conceptual.  
                    Sentimos que los materiales que presentamos constituyen un avance y una exploración para hacer frente, d
                    e una manera concreta, democrática y transformadora de la realidad, a este  desafío central de muchas instituciones 
                    de educación superior. 
                </p>
            </section>
        </article>
    )
}

