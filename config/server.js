const express = require('express'),
consign = require('consign'),
bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


consign()
	.include('app/routes')
	.then('app/models')
	.then('config/database.js')
	.then('app/controllers')
	.then('app/views/index')
	.into(app);


module.exports = app;