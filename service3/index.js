'use strict';

const express = require('express');
var os = require("os");


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var hostname = os.hostname();
// App
const app = express();
app.get('/service3', (req, res) => {
  console.log(` *** GET /service3 from ------ ${hostname} ------`);
  res.send(` Service 3 is running on ${hostname}`);
});

app.get('/service3/hello', (req, res) => {
 console.log(` *** GET /service3/hello from ------ ${hostname} ------`); 
 res.send(' Hello from service3 ');
});

app.get('/service3/hello/world', (req, res) => {
 console.log(` *** GET /service3/hello/world from ------ ${hostname} ------`);  
 res.send(' Hello World from service3');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
