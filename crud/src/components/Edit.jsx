import React, { Component } from 'react'
import axios from 'axios'
export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', ira: '' }
        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIra = this.setIra.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }
    setIra(e) {
        this.setState({ ira: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        /*console.log('Nome: '+ this.state.nome +
                   ' Curso: '+this.state.curso +
                   ' IRA: ' + this.state.ira)
         */
        const estudanteEdit = {
            nome:this.state.nome,
            curso:this.state.curso,
            IRA:this.state.ira
        }
        //axios.put('http://localhost:3001/estudantes/' + this.props.match.params.id,
        //           estudanteEdit) // json
        axios.put('http://localhost:3002/estudantes/update/' + this.props.match.params.id,
                   estudanteEdit)//express
        
        .then(
            (res)=>{
                this.props.history.push('/list');
            }
        )
        .catch(error=>console.log(error))
    }
    componentDidMount() {
        //console.log("id: " + this.props.match.params.id)
        //axios.get('http://localhost:3001/estudantes/' + this.props.match.params.id) json
        axios.get('http://localhost:3002/estudantes/retrieve/' + this.props.match.params.id)//express
            .then(
                (res) => {
                    this.setState(
                        {
                            nome: res.data.nome,
                            curso: res.data.curso,
                            ira: res.data.IRA
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
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar Estudante</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} />
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} />
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" className="form-control"
                            value={this.state.ira} onChange={this.setIra} />

                    </div>

                    <div className="form-group">
                        <input type="submit" value="Editar" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}