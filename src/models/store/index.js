const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const STSchema = new Schema({
    drogariaRua: {
      type: String
    },
    sigla: {
      type: String
    },
    idOracle: {
      type: Number
    },
    nome: {
      type: String
    },
    categoria: {
      type: String
    },
    logradouro: {
      type: String
    },
    numero: {
      type: Number
    },
    complemento: {
      type: String
    },
    bairro: {
      type: String
    },
    cidade: {
      type: String
    },
    uf: {
      type: String
    },
    cep: {
      type: String
    },
    telefone: {
      type: String
    },
    funcionamentoSegSab: {
      type: String
    },
    funcionamentoDomFer: {
      type: String
    },
    latitude: {
      type: String
    },
    longitude: {
      type: String
    },
    blitzSaude: {
      type: String
    },
    farmaciaPopular: {
      type: String
    },
    sellerEcomm: {
      type: String
    },
    idPdv: {
      type: Number
    },
    idLojaPdv: {
      type: Number
    }
})

const ST = mongoose.model('Stores', STSchema);

module.exports = ST;
