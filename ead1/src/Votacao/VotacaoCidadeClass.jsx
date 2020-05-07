import React, { Component } from 'react'

const cidadesStr = ['Fortaleza','Quixada','Baturite','Aracoiaba']

export default class VotacaoCidadesClass extends Component {

    constructor(props) {
        super(props)
        this.state = { fortaleza: 0, quixada: 0, baturite: 0, aracoiaba: 0, maior: 0, menor: 0 }
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.fortaleza !== this.state.fortaleza ||
            prevState.quixada   !== this.state.quixada   ||
            prevState.baturite  !== this.state.baturite  ||
            prevState.aracoiaba !== this.state.aracoiaba){
            
            const cidades = [this.state.fortaleza, this.state.quixada, this.state.baturite, this.state.aracoiaba]
            let localMaior = this.state.maior
            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] > localMaior)
                    localMaior = cidades[i]
            }
            this.setState({maior:localMaior})

            let localMenor = this.state.maior
            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] < localMenor)
                    localMenor = cidades[i]
            }
            this.setState({menor:localMenor})
        }
    }

    MaisVotadas(){
        let saida = ''
        const cidades = [this.state.fortaleza, this.state.quixada, this.state.baturite, this.state.aracoiaba]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===this.state.maior) saida+=cidadesStr[i]+' '
        }
        return saida
    }

    MenosVotadas(){
        let saida = ''
        const cidades = [this.state.fortaleza, this.state.quixada, this.state.baturite, this.state.aracoiaba]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===this.state.menor) saida+=cidadesStr[i]+' '
        }
        return saida
    }

    render() {

        return (
            <div>
                <h2>Fortaleza: {this.state.fortaleza}</h2>
                <h2>Quixada  : {this.state.quixada}</h2>
                <h2>Baturite : {this.state.baturite}</h2>
                <h2>Aracoiaba: {this.state.aracoiaba}</h2>
                <h4>Maior: {this.state.maior} : {this.MaisVotadas()}</h4>
                <h4>Menor: {this.state.menor} : {this.MenosVotadas()}</h4>
                <button onClick={() => this.setState({ fortaleza: this.state.fortaleza + 1 })} >Votar em Fortaleza</button>
                <button onClick={() => this.setState({ quixada: this.state.quixada + 1 })}>Votar em Quixadá</button>
                <button onClick={() => this.setState({ baturite: this.state.baturite + 1 })}>Votar em Baturite</button>
                <button onClick={() => this.setState({ aracoiaba: this.state.aracoiaba + 1 })}>Votar em Aracoiaba</button>
            </div>
        )
    }
}