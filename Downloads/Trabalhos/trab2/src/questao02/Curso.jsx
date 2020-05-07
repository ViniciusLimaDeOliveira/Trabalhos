import React from 'react'
import Turma from './Turma'

export default props=>
    <div>
        <h2>Curso : {props.curso}</h2>
        <Turma turma= 'Fundamentos de Programação' curso = {props.curso}/>
        <Turma turma = 'Introdução a Banco de Dados' curso = {props.curso}/>
    </div>