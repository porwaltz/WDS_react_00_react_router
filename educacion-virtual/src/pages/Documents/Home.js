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
                <Link to="/" className="miniature" >
                    <Favourite 
                    title="Cómo Hacer una Monografia"
                    source="img01.jpg"
                    resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                </Link>
                <Link to="/bitacoraDelInvestigador" className="miniature" >
                    <Favourite 
                    title="Bitácora del Investigador"
                    source="img02.jfif"
                    resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                </Link>
                <Link to="/nuevosLenguajesJuridicos" className="miniature" >
                    <Favourite 
                    title="Nuevos Lenguajes Jurídicos"
                    source="img03.jpg"
                    resume="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
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

