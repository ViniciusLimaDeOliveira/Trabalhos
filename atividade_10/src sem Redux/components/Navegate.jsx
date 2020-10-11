import React, { Component } from 'react'
import Card from './Card'
//import axios from 'axios'
import './Navegate.css'

export default class Navigate extends Component {

    constructor(props) {
        super(props)
        this.state = { valor1: this.props.valor1, valor2: this.props.valor2 }
    }

    soma1_num1() {
        const num = this.state.valor1 + 1
        this.setState({ valor1: num })
        this.props.setValor1(num)
    }

    sub1_num1() {

        const num = this.state.valor1 - 1
        this.setState({ valor1: num })
        this.props.setValor1(num)
    }

    soma10_num1() {

        const num = this.state.valor1 + 10
        this.setState({ valor1: num })
        this.props.setValor1(num)
    }

    sub10_num1() {

        const num = this.state.valor1 - 10
        this.setState({ valor1: num })
        this.props.setValor1(num)
    }
    //num2
    soma1_num2() {
        const num = this.state.valor2 + 1
        this.setState({ valor2: num })
        this.props.setValor2(num)
    }

    sub1_num2() {

        const num = this.state.valor2 - 1
        this.setState({ valor2: num })
        this.props.setValor2(num)
    }

    soma10_num2() {

        const num = this.state.valor2 + 10
        this.setState({ valor2: num })
        this.props.setValor2(num)
    }
    sub10_num2() {
        const num = this.state.valor2 - 10
        this.setState({ valor2: num })
        this.props.setValor2(num)
    }
    render() {
        return (
            <div>
                <Card title="Numero 2" red>
                <div className='navegate'>
                    <button className='btn btn-secondary' onClick={() => this.sub10_num1()}>
                        -10
                    </button>
                    <button className='btn btn-secondary' onClick={() => this.sub1_num1()}>
                        -1
                    </button>
                    <input value={this.state.valor1} readOnly />
                    <button className='btn btn-secondary' onClick={() => this.soma1_num1()}>
                        +1
                    </button>
                    <button className='btn btn-secondary' onClick={() => this.soma10_num1()}>
                        +10
                    </button>
                </div>
            </Card>
            <Card title="Numero 1" blue>
                <div className='navegate'>
                    <button className='btn btn-secondary' onClick={() => this.sub10_num2()}>
                        -10
                    </button>
                    <button className='btn btn-secondary' onClick={() => this.sub1_num2()}>
                        -1
                    </button>
                    <input value={this.state.valor2} readOnly />
                    <button className='btn btn-secondary' onClick={() => this.soma1_num2()}>
                        +1
                    </button>
                    <button className='btn btn-secondary' onClick={() => this.soma10_num2()}>
                        +10
                    </button>
                </div>
            </Card>
            </div>
            
        )

    }
}
