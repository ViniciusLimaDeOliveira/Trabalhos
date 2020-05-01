import React from 'react'
import IMCCalc from './IMCCalc';
export default props=>{
    let peso   = 100
    let altura = 1.80
    return <div>
               <h1>O IMC para o peso {peso} kg e altura {altura} m, é: </h1>
               <IMCCalc peso={peso} altura={altura}/>
           </div>
}
         
            