import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'

export default class Navigate extends Component {
    constructor(props) {
        super(props)
        this.state = { valor1:0 , valor2: 0 }
        this.setValor1 = this.setValor1.bind(this)
        this.setValor2 = this.setValor2.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

      }
      
    
      setValor1(e) {
        this.setState({ valor1: e.target.value })
      }

      setValor2(e) {
        this.setState({ valor2: e.target.value })
      }

      componentDidMount() {
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
    }

      onSubmit(e) {
       
        const AUX =
        {
            valor1: this.state.valor1,
            valor2: this.state.valor2
        }
        axios.put('http://localhost:3001/numeros/1', AUX)
            .then(
                res => {
                    console.log("ok update")
                }
            )
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <Card title='Numero 1' red>
                        <div>
                            <div className="form-group">
                                <input type="number" className="form-control"
                                    value={this.state.valor1} onChange={this.setValor1} required />
                            </div>
                        </div>
                    </Card>
                    <Card title='Numero 2' red>
                        <div>
                            <div className="form-group">
                                <input type="number" className="form-control"
                                    value={this.state.valor2} onChange={this.setValor2} required />
                            </div>
                        </div>
                    </Card>
                    <div class="button">
                        <button type="submit">Calcule</button>
                    </div>
                </form>
            </div>
        )

    }
}
