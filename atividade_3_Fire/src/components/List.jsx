import React, { Component } from 'react';
import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext'

const ListPage = () => (
    <FirebaseContext.Consumer>
        { contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {
    constructor(props) {
        super(props)
        this.state = { disciplinas: [], loading: false }
    }

    componentDidMount() {
        this.setState({loading:true})
        this.ref = this.props.firebase.getFirestore().collection('disciplinas')
        this.ref.onSnapshot(this.alimentarDisciplinas.bind(this))
    }

    alimentarDisciplinas(query) {
        let disciplinas = []
        query.forEach(
            (doc) => {
                const { nome, curso, capacidade } = doc.data()
                disciplinas.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        capacidade,
                    }
                )
            }
        )
        this.setState({ disciplinas: disciplinas , loading:false })
    }



    montarTabela() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i) => {
                return <TableRow disciplina={disciplina} key={i}
                    firebase={this.props.firebase}
                />;
            }
        )
    }

    gerarConteudo() {
        if (this.state.loading) {
            return (
                <tr>
                    <td>
                        <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>
            )
        } else return this.montarTabela()
    }

    render() {
        return (
            <div>
                <p><h3>Lista de Disciplinas:</h3></p>

                <table className="table table-striped table-dark table-bordered" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID :</th>
                            <th>Nome :</th>
                            <th>Curso :</th>
                            <th>Capacidade :</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>Funções :</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gerarConteudo()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage