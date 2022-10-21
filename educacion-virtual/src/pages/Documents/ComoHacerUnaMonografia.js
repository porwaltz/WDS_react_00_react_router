import React from 'react'
import './Documents.scss';
import './ComoHacerUnaMonografia.scss'

export default function ComoHacerUnaMonografia(props){
    return (
        <article id="comoHacerUnaMonografia" class="document">
            <section>
                <h1>Instructivo de escritura: monografía</h1>
                <p>
                    Con esta guía podrás conocer cuáles son las características de una monografía para la universidad. 
                    Además, encontrarás algunas recomendaciones y herramientas para escribirla.
                </p>
            </section>
            <hr/>
            <section>
                <h3 class="text-left">Propósito comunicativo</h3>
                <p class="italic">¿Cuál es el objetivo del texto?</p>
                <p>
                    1)&emsp; Por un lado, el objetivo de la monografía es estudiar en detalle un tema o aspecto concreto y específico de una materia. 
                    Por ejemplo, si estamos cursando Derecho de Daños, el tema puede ser “la prevención de daños en la aplicación OnlyFans”.
                </p>
                <p>
                    1)&emsp; Por el otro, es un texto académico de formación, lo que quiere decir que es también el objetivo del texto 
                    demostrar y verificar que se aprendieron los contenidos del curso.
                </p>
            </section>
            <hr/>
            <section>
                <h3 class="text-left">Audiencia y criterios de evaluación generales</h3>
                <p class="italic">¿Quién va a leer mi texto y qué espera de él?</p>
                <p>Tu monografía será leída por tu(s) docente(s) de la materia.</p>
                <p>
                    Cuando escribimos una monografía se espera que no solo repliquemos lo que leemos, sino que&nbsp;
                    <span class="bold underline">produzcamos conocimiento</span>. 
                    A diferencia de otros textos que hacemos en la universidad como, por ejemplo, un parcial o un control de lectura, 
                    cuando solicitan una monografía los docentes esperan que interactuemos con los textos leídos 
                    y digamos cosas que no están incluidas ahí, y no simplemente reproduzcamos.
                </p>
                <p>
                    También van a esperar que esté correctamente estructurado (ver Estructura, debajo) y que se utilice un lenguaje formal.
                </p>
                <br/>
                <p class="italic aclaration">
                    Para saber más sobre qué se considera “producir conocimiento” en la Universidad, te recomendamos consultar 
                    este <a class="underline" href="/#">video</a>. 
                </p>
            </section>
            <hr/>
            <section>
                <h3 class="text-left">Temas</h3>
                <p class="italic">¿De qué trata el texto?</p>
                <p>
                    El tema del texto dependerá de la materia en que te soliciten la monografía. De todos modos, 
                    el tema de la monografía debe ser más acotado que el tema general de la materia. 
                    Esto se define una vez elegida la hipótesis. Por ejemplo, si la materia es Derecho de Daños, el tema de la monografía 
                    va a estar dentro de ese abanico, pero será algo más específico como “La prevención de daños en las escuelas”, 
                    o incluso aún más acotado.
                </p>
            </section>
            <hr/>
            <section>
                <h3 class="text-left bold underline"><a href="https://www.youtube.com/watch?v=WRXamJHTloM" target="_blank">Antes de escribir...</a></h3>
                <p>
                    - &emsp;Consultá con tu docente todas las dudas que tengas y, sobre todo, confirmá que la hipótesis elegida sea válida.
                </p>
                <p>
                    - &emsp;Hacé un punteo de lo que pondrías en cada parte de la monografía, siguiendo la estructura que presentamos abajo. 
                    Más sobre cómo empezar a escribir, &nbsp;
                    <a class="bold underline"
                    href="https://docs.google.com/document/d/1wIE06tK7LpoC94c5g_niEUbZ1flg8_9f/edit?usp=sharing&ouid=101639548558025778615&rtpof=true&sd=true"
                    target="_blank">acá</a>.
                </p>
            </section>
            <hr/>
            <section>
                <h3 class="text-left">Estructura</h3>
                <p class="italic">¿De qué partes consta el texto?</p>
                <ol>
                    <li>&emsp; &emsp; 1.&emsp;Introducción</li>
                    <li>&emsp; &emsp; 2.&emsp;Hipótesis/objetivos</li>
                    <li>&emsp; &emsp; 3.&emsp;Estado del arte</li>
                    <li>&emsp; &emsp; 4.&emsp;Metodología</li>
                    <li>&emsp; &emsp; 5.&emsp;Análisis</li>
                    <li>&emsp; &emsp; 6.&emsp;Conclusión</li>
                    <li>&emsp; &emsp; 7.&emsp;Bibliografía</li>
                </ol>
            </section>
            <hr/>
            <section>
                <h3  class="text-left">Para recordar</h3>
                <p>
                    - &emsp;Este texto estará dirigido a una persona que es experta en la materia sobre la que hablás. 
                    De cualquier forma, es importante que también hables y te construyas como alguien que sabe del tema que estás desarrollando. 
                </p>
                <p>
                    - &emsp;<span class="bold">¡Importante!</span>&nbsp;<span class="italic">¿Cómo incluyo las fuentes que usé?</span>  
                    Si tomaste ideas de textos que leíste durante la cursada o si querés incluir un fragmento de otro texto en el tuyo, 
                    es importante que sigas las reglas establecidas para ello. Normas de citación.&nbsp;
                    <a class="bold underline"
                    href="https://www.youtube.com/watch?v=vilnzzHSuus"
                    target="_blank">Normas de citación</a>.
                </p>
            </section>
            <hr/>
        </article>
    )
}