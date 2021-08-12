const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const routes = require('./router/api')

mongoose.connect('mongodb://coopstores:coopstoresadmin@localhost:27017/admin', {useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function () {
  console.log('Connected to Database')
})

mongoose.connection.on('error', function (err) {
  console.log('Database error', err)
})

app.use(express.json())
app.use(cors())
app.use(routes)


app.use(function(err, req, res, next){
  console.log(err);
  res.status(422).send({error: err.message});
});

server.listen(3333);
