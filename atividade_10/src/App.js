import React, { Component } from 'react'
import './App.css'
import Card from './components/Card'
import Soma from './components/Soma'
import NumeroFront from './components/Multiplicação'
import NumeroInfo from './components/Max'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { n1: 0, n2: 0 }
    this.setN1 = this.setN1.bind(this)
    this.setN2 = this.setN2.bind(this)
    this.getN1 = this.getN1.bind(this)
    this.getN2 = this.getN2.bind(this)
  }
  

  setN1(e) {
    this.setState({ n1: e.target.value })
  }
  setN2(e) {
    this.setState({ n2: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
  }
  getN1(){
    return this.state.n1
  }
  getN2(){
    return this.state.n2
  }


  onSubmit(e){
    e.preventDefault()
    //const par = {
     // numero1 : this.state.n1,
    //  numero2 : this.state.n2
    //}
    
  }


  render() {
    return (
      <div className='container' >
        <h1>Redux Calc</h1>
        <div className='line'>
          <form onSubmit={this.onSubmit}>
            <Card title='Numero 1' red>
              <div>
                <div className="form-group">
                  <input type="number" className="form-control"
                    value={this.state.n1} onChange={this.setN1} required />
                </div>
              </div>
            </Card>
            <Card title='Numero 2' red>
              <div>
                <div className="form-group">
                  <input type="number" className="form-control"
                    value={this.state.n2} onChange={this.setN2} required />
                </div>
              </div>
            </Card>
            <div class="button">
                  <button type="submit">Calcule</button>
            </div>
          </form>
        </div>

        <div className='line'>
          <Soma a={2} b={3}/>
          <NumeroFront a={2} b={3} />
          <NumeroInfo />
        </div>
      </div>
    )
  }
}