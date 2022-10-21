import React from 'react'
import './Documents.scss'
import './Card.scss'
import propTypes from 'prop-types'
//import { Link } from "react-router-dom";


export default function Card(props){
    return (
        <div class="card">
            <a href={props.link} target="_blank">
                <img src={require('../img/' + props.source)} width="250" height="300" alt="yes"></img>
            </a><div><h3>{props.name}</h3><p>{props.resume}</p></div>
        </div>
    )
}

Card.propTypes = {
    link: propTypes.string,
    source: propTypes.string,
    name: propTypes.string,
    resume: propTypes.string
  }