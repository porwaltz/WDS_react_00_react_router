import React from 'react'
import propTypes from 'prop-types'
//import { Link } from "react-router-dom";
import './Favourite.scss'

export default function Favourite(props){
    return (
        <div class="flex-col favourite">
            <h3>{props.title}</h3>
            <img src={require('../img/' + props.source)} alt={props.source}></img>
            <p>{props.resume}</p>
        </div>
    )
}

Favourite.propTypes = {
    title: propTypes.string,
    source: propTypes.string,
    resume: propTypes.string
  }
  