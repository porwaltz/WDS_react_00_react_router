import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <footer>
            <div class="logo"></div>
            <div class="direccion"></div>
            <div class="links"></div>
            <div class="end"></div>
            <p><FontAwesomeIcon icon={faFacebook} color="antiquewhite"/> Uba virtual todos los derechos registrados. 2022.</p>
        </footer>
    )
}
