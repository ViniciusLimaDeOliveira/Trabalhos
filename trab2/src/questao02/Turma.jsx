import React from 'react'
import Estudante from './Estudante'

export default props=>
    <div>
        <h2>Turma : {props.turma}</h2>
        <Estudante nome='Fulano de Tal' curso = {props.curso}/>
        <Estudante nome='Beltrano de Tal' curso = {props.curso}/>
        <Estudante nome='Sicrano de Tal' curso = {props.curso}/>
    </div>