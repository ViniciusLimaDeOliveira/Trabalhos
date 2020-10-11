import React, { Component } from 'react'
import Card from './Card'
import {connect} from 'react-redux'

class Max extends Component {
   
    render() {
        function max(a, b) {
            if (a > b) return a
            else if (a < b) return b
            else return `Iguais: ${a}`
        }

        const resutado = max(parseInt(this.props.mynumber1, 10), parseInt(this.props.mynumber2, 10))
        return (
            <div>
                <Card title='Max' dark>
                    <div>
                        {resutado}
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

 
const connecMax= connect(mapStateToProps)(Max)
export {connecMax}