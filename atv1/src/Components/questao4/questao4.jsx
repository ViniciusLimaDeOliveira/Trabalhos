import React from 'react'

export default class questao4 extends React.Component {
    render() {
        return (<div class="card border-dark text-white bg-info  mb-3" style={{ float: 'center', width: "18rem"}}>
                    <div class="card-header">
                    <h5>Aluno</h5>
                    </div>
                    <p class="card-text" >
                        <ul>
                            <li>Nome: {this.props.name}</li>
                            <li>Curso: {this.props.curso}</li>
                            <li>Cidade Natal : {this.props.cidade}</li>
                        </ul>
                    </p>
                 </div>
        )
    }
}
/*
export default class questao4 extends React.Component{
    render(){
        return <div>
            <ul>
                <li>Nome: {this.props.name}</li>
                <li>Curso: {this.props.curso}</li>
                <li>Cidade Natal : {this.props.cidade}</li>
            </ul>
     </div>
    }
}
*/
