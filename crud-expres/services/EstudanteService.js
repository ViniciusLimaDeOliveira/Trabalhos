const EstudanteModel = require('../models/EstudanteModel')

let estudantes = [
    {_id:0,nome:'Fulano',curso:'ES',IRA:5.6},
    {_id:1,nome:'Sicrano',curso:'ES',IRA:5.6},
    {_id:2,nome:'Beltrano',curso:'ES',IRA:5.6}
]
let _id = 3
class EstudanteService {

    static register(data) {
        let estudante = new EstudanteModel(
            _id++,
            data.nome,
            data.curso,
            data.IRA
        )
        estudantes.push(estudante)
        return estudante
    }
    static list() {
        return estudantes
    }
    static update(_id, data) {
        for (let i = 0; i < estudantes.length; i++)  {
            if ( estudantes[i]._id == _id) {
                estudantes[i].nome  = data.nome
                estudantes[i].curso = data.curso
                estudantes[i].IRA   = data.IRA
                return estudantes[i]
            }
           
        }
        return null

    }
    static delete(_id) {
        for (let i = 0; i < estudantes.length; i++) {
            if (estudantes[i]._id == _id) {
                estudantes.splice(i, 1)
                return true
            }
        }
        return false
    }
    static retrieve(_id) {
        for (let i = 0; i < estudantes.length; i++) {
            if (estudantes[i]._id == _id) {
                return estudantes[i]
            }
        }
        return {}
    }
}

module.exports = EstudanteService