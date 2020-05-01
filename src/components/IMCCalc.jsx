import React from 'react'
import IMCMsg from './IMCMsg'

export default props=>
    <div>
        <h2>IMC: {props.peso/(props.altura*props.altura)}</h2>
        <IMCMsg IMC={props.peso/(props.altura*props.altura)} />
    </div>