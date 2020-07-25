import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Questao1 from './Components/questao1/questao1'
import Questao2 from './Components/questao2/questao2'
import Questao3 from './Components/questao3/pai'
import Pai2 from './Components/questao4/pai2'
import Questao4 from './Components/questao4/questao4'

function App() {
  return (
    <div className="App">
      <h1>1 Questão</h1>
          <Questao1/>
      <h1>2 Questão</h1>
         <Questao2 name="Siscrano" curso="Redes" cidade="Quixada"/>
      <h1>3 Questão</h1>
          <Questao3/>
      <h1>4/5 Questão</h1>
            <Pai2>
              <Questao4 name="Siscrano" curso="Redes" cidade="Quixada"/>
              <Questao4 name="Anna julia" curso="Medicina" cidade="Aracoiaba"/>
              <Questao4 name="vinícius lima de oliveira" curso="Computação" cidade="Aracoiaba"/>
            </Pai2>       
      </div>
  );
}

export default App;
/*
<div class="card" >
<div class="card" style={{float : 'left', paddingRight : '5px'}}>
      <h3 class="card-title">Alunos</h3>
      <p class="card-text"></p>
         <Pai2> 
            <Questao4 name="Siscrano" curso="Redes" cidade="Quixada"/>
            <Questao4 name="Anna julia" curso="Medicina" cidade="Aracoiaba"/>
        </Pai2>
  </div>
</div>*/