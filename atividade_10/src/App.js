import React, { Component } from 'react'
import './App.css'
import Card from './components/Card'

export default class App extends Component {

  render() {
    return (
      <div className='container' >
        <h1>Redux Calc</h1>
        <div className='line'>
          <Card Titulo="Numero 1" blue/>
          <Card Titulo="Numero 2" blue/>
        </div>
        <div className='card-deck'>
          <Card Titulo="Soma" dark/>
          <Card Titulo="Multi" green />
          <Card Titulo="MAX" />
          
        </div>
      </div>
    )
  }
}