import React, { Component } from 'react'
import Card from './Card'

import {connect} from 'react-redux'

class Multi extends Component {
    
    render() {
        return (
            <div>
                <Card title='Multiplicação' dark>
                    <div>
                        {parseInt(this.props.mynumber1, 10)*parseInt(this.props.mynumber2, 10)}
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

const connecMulti = connect(mapStateToProps)(Multi)
export {connecMulti}