const ST = require('../../models/store');

exports.getAll = function (req, res, next) {
  ST.find({}).then(function(st) {
    res.send(st)
  }).catch(next);
}

exports.getOne = function (req, res, next) {
  ST.findOne({_id: req.params.id}).then(function(st) {
    res.send(st)
  }).catch(next);
}

exports.create = function (req, res, next) {
  ST.create(req.body).then(function(st) {
    res.send(st)
  }).catch(next);
}

exports.update = function (req, res, next) {
  console.log('entrou dentro do params', req.params)
  console.log('entrou dentro do body', req.body)
  ST.findByIdAndUpdate({_id: req.params.id},
                   req.body).then(function(){
    ST.findOne({_id: req.params.id}).then(function(st){
      console.log(st)
      res.send(st);
    });
  }).catch(next);
};

exports.delete = function (req, res, next) {
  console.log('entrou no delete');
  ST.findByIdAndRemove({_id: req.params.id}).then(function(st){
    res.send(st);
  }).catch(next);
}