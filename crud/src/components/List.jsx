import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'

export default class List extends Component{
    constructor(props){
        super(props)
        this.state={estudantes:[]}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }
    
    componentDidMount(){
        //axios.get('http://localhost:3001/estudantes')
        axios.get('http://localhost:3002/estudantes/list')
        .then(
            (res)=>{
                this.setState({estudantes:res.data})
            }
        )
        .catch(
            (error)=>console.log(error)
        )
    }
    
    montarTabela() {
        if(!this.state.estudantes) return
        return this.state.estudantes.map(
            (estudante, i) => {
                return <TableRow estudante={estudante} key={i}  
                apagarElementoPorId={this.apagarElementoPorId} />;
            }
        )
     }   
    apagarElementoPorId(id){
        let estudantesTemp = this.state.estudantes;
        for(let i = 0;i<estudantesTemp.length;i++){
            if(estudantesTemp[i]._id===id){
                estudantesTemp.splice(i,1)
            }
        }
        this.setState({estudantes:estudantesTemp})
    }
    render(){
        return(
            <div style={{ marginTop: 10 }}>
                <h3>Listar Estudantes</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.montarTabela()}
                    </tbody>    
                </table>
            </div>
        )
    }
}