
import React, { Component } from 'react'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const EditPage = (props) => (
    <FirebaseContext.Consumer>
        {contexto => (<Edit firebase={contexto} id={props.match.params.id} />)}
    </FirebaseContext.Consumer>
)


class Edit extends Component {
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
        /*
        this.props.firebase.getFirestore().collection('disciplinas').doc(this.props.id).set(
            {
                nome: this.state.nome,
                curso: this.state.curso,
                capacidade: this.state.capacidade
            }
        )
            .then(
                res => {
                    console.log("Inserido com suscesso")
                }
            )
            .catch(error => console.log(error))
            */
        const disciplina = {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }
        FirebaseService.edit(
            this.props.firebase.getFirestore(),
            (a) => {
                if (a === 'ok') console.log(a)
                else console.log(a)
            },
            this.props.id,
            disciplina
        )

    }
    componentDidMount() {
        /*this.props.firebase.getFirestore().collection('disciplinas').doc(this.props.id).get()
            .then(
                (doc) => {
                    this.setState(
                        {
                            nome: doc.data().nome,
                            curso: doc.data().curso,
                            capacidade: doc.data().capacidade
                        }
                    )
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
            */
        FirebaseService.retrieve(
            this.props.firebase.getFirestore(),
            (doc) => {
                this.setState(
                    {
                        nome: doc.nome,
                        curso: doc.curso,
                        capacidade: doc.capacidade
                    }
                )
            },
            this.props.id
        )

    }
    render() {
        return (
            <div>
                <h3>Criar Disciplina</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome:    </label>
                        <input type="text" className="form-control"
                            value={this.state.nome} onChange={this.setNome} required />
                    </div>
                    <div className="form-group">
                        <label>Curso:    </label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso} required />
                    </div>
                    <div className="form-group">
                        <label>Capacidade:    </label>
                        <input type="number" className="form-control"
                            value={this.state.capacidade} onChange={this.setCapacidade} min="0" required />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Editar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPage