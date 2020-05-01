import React from 'react'
import ReactDOM from 'react-dom';
/* Abilite para questão 1 */

import Curso from './questao01/Curso'
import Estudante from './questao01/Estudante'
import Turma from './questao01/Turma' 

// Abilite para questão 2 
//import Curso from './questao02/Curso'

const root = document.getElementById('root');

// Questão 2 
//ReactDOM.render(<Curso curso = 'Sistemas de Informação'/>,root);


// Questão 1 

ReactDOM.render(
    <Curso curso='Sistemas de Informação'>
        <Turma turma='Fundamentos de Programação' curso='Sistemas de Informação'>
            <Estudante nome='Fulano de Tal'/>
            <Estudante nome='Beltrano de Tal'/>
        </Turma>
        <Turma turma='Introdução a Banco de Dados' curso='Sistemas de Informação'>
            <Estudante nome='Fulano de Tal'/>
            <Estudante nome='Beltrano de Tal'/>
            <Estudante nome='Sicrano de Tal'/>
        </Turma>
    </Curso>
    ,root);
