import React, { Component } from 'react'
import Card from './Card'

export default class NumeroBack extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const n1 = this.props.a
        const n2 = this.props.b
        return (
            <div>
                <Card title='Costas' dark>
                    <div>
                       {n1+n2}
                    </div>
                </Card>
            </div>
        )

    }
}
