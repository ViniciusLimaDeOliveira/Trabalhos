import React, { Component } from 'react'


export default class Card extends Component {
    getColor(){
        if(this.props.blue) return 'bg-primary'
        if(this.props.green) return 'bg-success'
        if(this.props.dark) return 'bg-dark'
        else return 'bg-secondary'
    }
    render() {
        return (
                <div className={`card text-white ${this.getColor()}`}>
                    <div className='card-header'>
                        {this.props.Titulo}
                    </div>
                    <div className='card-body'>
                        <div className="form-group">
                            
                        </div>
                    </div>
                </div>
        )
    }
}