import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return (
        <footer>
            <div class="logo"></div>
            <div class="direccion"></div>
            <div class="links"></div>
            <div class="end"></div>
            <p><FontAwesomeIcon icon={faFacebook} color="black"/> chau</p>
        </footer>
    )
}

export default Footer