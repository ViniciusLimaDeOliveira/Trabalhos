import React, { Component } from 'react';
import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ListPage = () => (

    <FirebaseContext.Consumer>
        { contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {
    constructor(props) {
        super(props)
        this._isMounted = false
        this.state = { disciplinas: [], loading: false }
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({loading:true})
        FirebaseService.list(this.props.firebase.getFirestore() , 
            (disciplinas)=>{
                    if (disciplinas){
                        if(this._isMounted){
                            this.setState({disciplinas:disciplinas,loading:false})
                        }
                    }
            }
        )
        //this.ref = this.props.firebase.getFirestore().collection('disciplinas') V1.0
        //this.ref.onSnapshot(this.alimentarDisciplinas.bind(this)) V1.0
    
    }

    componentWillUnmount(){
        this._isMounted=false
    }

    /* V1.0
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
        if(this._isMounted) this.setState({ disciplinas: disciplinas , loading:false })       
    }*/



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