import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import World from './components/questao3/World'
import Arena from './components/questao1/Arena'
import Heroi from './components/questao1/Hero'
import Enemy from './components/questao1/Enemy'
import {HeroImagem,EnemyImagem,Hero2Imagem,
  Enemy2Imagem,Hero3Imagem,Enemy3Imagem,
  } from './components/questao1/Imagen'
import './App.css';

function App() {
  return (
    <div className="App">
     
     <World>
            <Arena arena='Reino de Eternia'>
                <Heroi name='He-man' img={HeroImagem}/>
                <Enemy name='Esqueleto' img={EnemyImagem}/>
            </Arena>
            <Arena arena='Middle earth'>
                <Heroi name='Gandalf' img={Hero3Imagem}/>
                <Enemy name='Balrog' img={Enemy3Imagem}/>
            </Arena>
            <Arena arena='Rua do Limoeiro'>
                <Heroi name='Cascão' img={Hero2Imagem}/>
                <Enemy name='H2O' img={Enemy2Imagem}/>
            </Arena>
            
     </World>

    </div>
  );
}

export default App;

/*
<Arena arena='Mundo Pokemon'>
                <Heroi name='Ash' img={ash}/>
                <Enemy name='Time' img={ashEnemy}/>
            </Arena>
*/