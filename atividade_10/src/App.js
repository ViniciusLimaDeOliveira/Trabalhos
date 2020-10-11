import React, { Component } from 'react'
import './App.css'
import {connecMax as Max,connecMulti as Multi,connecNavigate as Navigate,connecSoma as Soma}from './components'


export default class App extends Component {
  
  render() {
    return (
      <div className='container' >
        <h1>Redux Calc</h1>
        <div className='line'>
          <Navigate />
        </div>
        <div className='line' >
          <Soma/>
          <Multi/>
          <Max/>
        </div>
      </div>
    )
  }
}