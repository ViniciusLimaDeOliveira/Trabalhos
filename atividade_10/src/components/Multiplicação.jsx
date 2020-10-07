import React, { Component } from 'react'
import Card from './Card'

export default class NumeroFront extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Card title='Multiplicação' blue>
                    <div>
                        {this.props.a*this.props.b}
                </div>
                </Card>
            </div>
        )
    }
}
