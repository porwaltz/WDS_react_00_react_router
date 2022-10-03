import React from 'react'
import './Documents.scss'
import './ComoEvitarElPlagio.scss'

export default function ComoEvitarElPlagio(props){
    return (
        <article id="comoEvitarElPlagio" class="document">
            <h1>Como Evitar el Plagio</h1>
            <div class="video-container">
                    <iframe width="560" height="315" src="https://drive.google.com/file/d/1NZeqzbwY-6Ue1P-nymXcOLuASFU6aZ85/preview" 
                    title="Cómo evitar el plagio"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    class="video" allowfullscreen></iframe>
                </div>
        </article>
    )
}