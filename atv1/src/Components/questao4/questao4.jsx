import React from 'react'

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
