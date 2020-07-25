var express = require('express');
var router = express.Router();
var EstudanteService = require('../services/EstudanteService')

router.get('/list', function (req, res, next) {
    res.json(EstudanteService.list())
})

router.post('/register', function (req, res, next) {
    res.json(EstudanteService.register(req.body))
})

router.put('/update/:id', function (req, res, next) {
    res.json(EstudanteService.update(req.params.id, req.body))
})

router.delete('/delete/:id', function (req, res, next) {
    const ok = EstudanteService.delete(req.params.id)
    if (ok) return res.json({ "suscess": true })
    else return res, json({ "sucess": false })
})

router.get('/retrieve/:id', function (req, res, next) {
    const estudante = EstudanteService.retrieve(req.params.id)
    return res.json(estudante)
})

module.exports = router
