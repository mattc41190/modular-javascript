'use strict';

const express = require('express');
const app = new express();

app.use(express.static('public'));
app.use(express.static('ES5'));
app.use(express.static('ES6'));

app.get('/', (req, res) => {
  res.send('go to application examples')
})

app.listen(3000, function() {
  console.log('listening...');
})
