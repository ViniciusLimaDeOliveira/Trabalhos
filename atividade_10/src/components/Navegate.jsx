import React, { Component } from 'react'
import Card from './Card'
import './Navegate.css'

import {connect} from 'react-redux'
import {altNumber,altNumber2} from '../store/actions/actionNumberCreator'

class Navigate extends Component {
    soma1_num1() {
        const num = this.props.mynumber1 + 1 
        this.props.alterarNumero(num)
    }

    sub1_num1() {

        const num = this.props.mynumber1 - 1 
        this.props.alterarNumero(num)
       
    }

    soma10_num1() {

        const num = this.props.mynumber1 + 10
        this.props.alterarNumero(num)
        
    }

    sub10_num1() {

        const num = this.props.mynumber1 - 10 
        this.props.alterarNumero(num)
        
    }
    //num2
    soma1_num2() {
        const num = this.props.mynumber2 + 1 
        this.props.alterarNumero2(num)
    }

    sub1_num2() {

        const num = this.props.mynumber2 - 1 
        this.props.alterarNumero2(num)
        
    }

    soma10_num2() {

        const num = this.props.mynumber2 + 10
        this.props.alterarNumero2(num)
    }
    sub10_num2() {

        const num = this.props.mynumber2 - 10 
        this.props.alterarNumero2(num)
     }

    render() {
        return (
            <div>
                <Card title="Numero 1 " red>
                <div className='navegate'>
                    <button className='btn btn-secondary' onClick={() => this.sub10_num1()}>
                        -10
                    </button>
                    <button className='btn btn-secondary' onClick={() => this.sub1_num1()}>
                        -1
                    </button>
                    <input value={this.props.mynumber1} readOnly />
                    <button className='btn btn-secondary' onClick={() => this.soma1_num1()}>
                        +1
                    </button>
                    <button className='btn btn-secondary' onClick={() => this.soma10_num1()}>
                        +10
                    </button>
                </div>
            </Card>
            <Card title="Numero 2" blue>
                <div className='navegate'>
                    <button className='btn btn-secondary' onClick={() => this.sub10_num2()}>
                        -10
                    </button>
                    <button className='btn btn-secondary' onClick={() => this.sub1_num2()}>
                        -1
                    </button>
                    <input value={this.props.mynumber2} readOnly />
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

function mapStateToProps(state){
    return{
        mynumber1: state.vnumber1.number1,
        mynumber2: state.vnumber2.number2
    }
}

function mapActionCreatorToProps(dispatch){
    
    return{
        alterarNumero(novoNum){
            const action = altNumber(novoNum)
            dispatch(action)
        },
        alterarNumero2(novoNum){
            const action = altNumber2(novoNum)
            dispatch(action)
        }

    }
}



const connecNavigate =connect(mapStateToProps,mapActionCreatorToProps)(Navigate)
export {connecNavigate}