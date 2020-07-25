var mongoose = require('mongoose');

var EstudanteSchema = mongoose.Schema(
    {
        nome:  { type: String, required: true, max: 150 },
        curso: { type: String, required: true, max: 100 },
        IRA:   { type: Number, required: true }
    }
);

var EsrudanteModel = mongoose.model('estudantes',EstudanteSchema);

module.exports = EsrudanteModel;
