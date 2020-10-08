import React, { Component } from 'react'
import './App.css'
import Card from './components/Card'
import Soma from './components/Soma'
import NumeroFront from './components/Multiplicação'
import NumeroInfo from './components/Max'
import Navigate from './components/Navegate'



export default class App extends Component {
  


  render() {
    return (
      <div className='container' >
        <h1>Redux Calc</h1>
        <div className='line'>
          <Navigate/>
        </div>
        <div className='line'>
          <Soma />
          <NumeroFront  />
          <NumeroInfo />
        </div>
      </div>
    )
  }
}