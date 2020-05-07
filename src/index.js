import React from 'react';
import ReactDOM from 'react-dom';
//import IMC from './components/IMC'
//import OlaMundo from './components/OlaMundo';
//import Estudante from './components/Estudante'
//import { CapitaoAmerica as Ca, ViuvaNegra as Vi} from './components/Vingadores';
//import Casa from './components/Casa';
//import CasaGenerica from './components/CasaGenerica'
//import Personagem from './components/Personagem'
import IMCFuncao from './components/IMC_Funcao/IMCFuncao'
const root = document.getElementById('root');
ReactDOM.render(<IMCFuncao peso={89} altura={1.83}/>,root)
//ReactDOM.render(<OlaMundo/>,root);
//const textoJSX = <Estudante nome='Fulano' 
//                            idade='20' 
//                            curso='CC'
//                            cidade='Fortaleza'>
//                </Estudante>
//ReactDOM.render(textoJSX,root);
//ReactDOM.render(<div>
//                <Ca nome='Jefin'/>
//                <Vi nome='wanda
//                '/>
//                </div>
//                ,root);
//ReactDOM.render(
//    <CasaGenerica>
//        <Personagem nome='Kermit' casa='pupets'/>
//        <Personagem nome='mis.Pguina' casa='pupets'/>
//    </CasaGenerica>
//,root)

//ReactDOM.render(
//    <CasaGenerica casa='pupets'>
//        <Personagem nome='Kermit' regiao='EUA' raca='sapo'/>
//        <Personagem nome='mis.Pguina' regiao='UK'raca='leitoa'/>
//    </CasaGenerica>
//,root)

