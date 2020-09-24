const DisciplinaModel = require('../models/DisciplinaModel')

class DisciplinaService{

    static register (req,res){
       DisciplinaModel.create(req.body).then(
            (disiciplina)=>{
                res.status(201).json(disiciplina)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }
S
    static list (req,res){
       DisciplinaModel.find()
        .then(
            (disiciplinas)=>{
                res.status(201).json(disiciplinas)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }

    static update (req,res){
       DisciplinaModel.findByIdAndUpdate(req.params.id,req.body,{'new':true}).
        then(
            (disiciplina) => { 
                res.status(201).json(disiciplina)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }

    static delete(req,res){
       DisciplinaModel.findByIdAndRemove(req.params.id).
        then(
            (disiciplina) =>{
                res.status(201).json(disiciplina)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }
    static retrieve(req,res){
       DisciplinaModel.findById(req.params.id)
        .then(
        (disiciplina)=>{
                res.status(201).json(disiciplina);
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }
}


module.exports = DisciplinaService;