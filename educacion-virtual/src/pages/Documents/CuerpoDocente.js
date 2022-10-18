import React from 'react'
import './Documents.scss'
import Card from './Card'
//import './ejemplo.scss'
//import propTypes from 'prop-types'
//import { Link } from "react-router-dom";


export default function CuerpoDocente(){
    return (
        <article id="cuerpoDocente" class="document">
            <h1>Cuerpo docente</h1>
            <Card
            link="https://researchportal.helsinki.fi/en/persons/juli-mansn%C3%A9rus"
            source="img_card_01.webp"
            resume="Doctora en Derecho y ciencias Sociales, Profesora titular regular U.B.A. de 
            «Obligaciones Civiles y Comerciales». Dicta cursos cursos de grado y posgrado. Abogada. 
            Codirectora del Proyecto de Investigación Proyecto «Nuevos lenguajes jurídicos UBACYT», 
            acreditado en el Programa UBACYT (Universidad de Buenos Aires Ciencia y Técnica). "
            name="Norma Olga Silvestre"
            />
            <Card
            link="https://www.utu.fi/en/people/toni-ahlqvist"
            source="img_card_02.webp"
            resume="Abogada UNLaM. Especialista en Adm. de Justicia - UBA. Auxiliar Letrada en la Sala II 
            de la Cámara Civil y Comercial del Dpto. Judicial San Isidro"
            name="Débora T. Marhaba M."
            />
            <Card
            link="https://researchportal.helsinki.fi/en/persons/panu-minkkinen"
            source="img_card_03.webp"
            resume="Abogado (UBA), docente en Derecho de daños (UBA), Investigador en el Proyecto Lectores para 
            la Justicia. Prosecretario Administrativo de Cámara del fuero CAyT de la CABA. 
            Con anterioridad, se desempeñó en el sector jurídico de la obra social OSPOCE."
            name="Kevin Rother"
            />
            
        </article>
    )
}