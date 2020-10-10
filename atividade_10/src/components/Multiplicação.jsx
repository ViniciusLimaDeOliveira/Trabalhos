import React, { Component } from 'react'
import Card from './Card'
//import axios from 'axios'

export default class NumeroFront extends Component {
    constructor(props) {
        super(props)
        //this.state = { valor1:'', valor2:'' }
    }
   /* componentDidMount() {
        axios.get('http://localhost:3001/numeros/1' )
        .then(
                (res) => {
                    this.setState(
                        {
                            valor1: res.data.valor1,
                            valor2: res.data.valor2
                        }
                    )
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }*/
    render() {
        return (
            <div>
                <Card title='Multiplicação' dark>
                    <div>
                        {parseInt(this.props.valor1, 10)*parseInt(this.props.valor2, 10)}
                </div>
                </Card>
            </div>
        )
    }
}
