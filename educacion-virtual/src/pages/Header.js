import React from 'react';
import './Header.scss';


function Header(){
    return(
        <nav id='header'>
            <h1>Derecho virtual</h1>
            <ul>
                <li class="dropdown">
                    <button class="dropbtn">Para estudiantes</button>
                    <div class="dropdown-content">
                        <a href="/#">Como escribir</a>
                        <a href="/#">Como investigar</a>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn">Para docentes</button>
                    <div class="dropdown-content">
                        <a href="/#">Como enseñar a investigar</a>
                    </div>
                </li>
                <li class="dropdown">
                    <button class="dropbtn">Extras</button>
                    <div class="dropdown-content">
                        <a href="/#">Lorem ipsum</a>
                        <a href="/#">Lorem ipsum</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Header;