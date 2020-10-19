import React, { Component } from 'react'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const CreatePage = () => (
    <FirebaseContext.Consumer>
        {contexto => (<Create firebase={contexto} />)}
    </FirebaseContext.Consumer>
)


class Create extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', capacidade: '' }
        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }
    setCapacidade(e) {
        this.setState({ capacidade: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        /*this.props.firebase.getFirestore().collection('disciplinas').add(
            {
                nome: this.state.nome,
                curso: this.state.curso,
                capacidade: this.state.capacidade
            }

        )
        .then(()=>console.log(`${this.state.nome} foi inserido com susseso`))
        .catch(error =>console.log(error) )
        */
        const disciplina = {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }
        FirebaseService.create(
            this.props.firebase.getFirestore(),
            (mensagem) => {
                if (mensagem = 'ok')
                    console.log("OK")
                else console.log('error')
            },
            disciplina
        )

        this.setState({ nome: '', curso: '', capacidade: '' })
    }
    render() {
        return (
            <div>
                <h3>Criar Disciplina</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome*:    </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} required />
                    </div>
                    <div className="form-group">
                        <label>Curso*:    </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} required />
                    </div>
                    <div className="form-group">
                        <label>Capacidade*:    </label>
                        <input type="number" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} min="0" required />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Criar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreatePage