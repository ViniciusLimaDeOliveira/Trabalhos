import React, { Component } from 'react'
import './App.css'
import Soma from './components/Soma'
import Multiplicação from './components/Multiplicação'
import Max from './components/Max'
import Navigate from './components/Navegate'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { valor1:0 , valor2: 0 }
    this.setValor1 = this.setValor1.bind(this)
    this.setValor2 = this.setValor2.bind(this)
  }
  

  setValor1(e) {
    this.setState({ valor1:e })
  }

  setValor2(e) {
    this.setState({ valor2: e })
  }

  render() {
    return (
      <div className='container' >
        <h1>Redux Calc</h1>
        <div className='line'>
          <Navigate  valor1={this.state.valor1} valor2={this.state.valor2} setValor1={this.setValor1} setValor2={this.setValor2}/>
        </div>
        <div className='line' >
          <Soma valor1={this.state.valor1} valor2={this.state.valor2} />
          <Multiplicação valor1={this.state.valor1} valor2={this.state.valor2}  />
          <Max Max valor1={this.state.valor1} valor2={this.state.valor2}  />
        </div>
      </div>
    )
  }
}