const express = require('express');
var app = express();

var authWare = require(__dirname + '/auth/authware');
var parseWare = require(__dirname + '/parse/parseware');

app.get('/auth', ...authWare, ...parseWare, (req, res) => {
  console.log('auth route hit');
  res.send('you did your auths and parses');
});

app.listen(5000, () => console.log('server up'));
