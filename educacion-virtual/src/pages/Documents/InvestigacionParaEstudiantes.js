import React from 'react'
import './Documents.scss'
import './InvestigacionParaEstudiantes.scss'

export default function InvestigacionParaEstudiantes(){
    return (
        <article id="investigacionParaEstudiantes" class="document">
            <h1>Investigación para estudiantes</h1>
            <h3>Recursos de utilidad para estudiantes interesados en comenzar a investigar</h3>
            <section id="recursos">
                <a href="http://www.derecho.uba.ar/biblioteca/virtual/" target="_blank" id="del-2s">
                    &#8226;&nbsp;Biblioteca virtual
                </a><br/>
                <a href="http://www.derecho.uba.ar/investigacion/programa-de-difusion-de-resultados-de-investigacion.php" target="_blank" id="del-4s">
                    &#8226;&nbsp;Programa de difusion de resultados de investigación
                </a><br/>
                <a href="http://www.derecho.uba.ar/investigacion/inv_proyectos_vigentes.php" target="_blank" id="del-6s">
                    &#8226;&nbsp;Proyectos vigentes de investigación
                </a><br/>
                <a href="http://www.derecho.uba.ar/investigacion/inv_programas_estudiantes.php" target="_blank" id="del-8s">
                    &#8226;&nbsp;Programas para estudiantes
                </a>
            </section>
        </article>
    )
}