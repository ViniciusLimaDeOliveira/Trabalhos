import React,{Component} from 'react'

export default class CidadeSimples extends Component{
    constructor(){
        super()
        this.state = {fortaleza:0,aracoiaba:0}
    }
    render(){
        //let fortaleza = 0
        //let aracoiaba = 0         
        return(
        <div>
            <h3>Fortaleza :{this.state.fortaleza}</h3>
            <h3>Aracoiaba :{this.state.aracoiaba}</h3>
            <button onClick={ ()=>{ this.setState({fortaleza:this.state.fortaleza+1})  
                    }}>
                Vote em Fortaleza.
            </button>
            <button onClick={ ()=>{ this.setState({aracoiaba:this.state.aracoiaba+1})   
                    }}>
                Vote em Aracoiaba.
            </button>  
        </div>
        )
    }
}


/*export default props=>{
    let fortaleza = 0
    let aracoiaba = 0 
    return(    
         <div>
            <h3>Fortaleza :{fortaleza}</h3>
            <h3>Aracoiaba :{aracoiaba}</h3>
            <button onClick={ ()=>{fortaleza = fortaleza +1}}>
                Vote em Fortaleza.
            </button>
            <button onClick={ ()=>{aracoiaba = aracoiaba +1}}>
                Vote em Aracoiaba.
            </button>  
         </div>
     )
 }
 */