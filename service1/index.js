'use strict';

const express = require('express');
var os = require("os");


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var hostname = os.hostname();
// App
const app = express();
app.get('/service1', (req, res) => {
  console.log(` *** GET /service1 from ------ ${hostname} ------`);
  res.send(` Service 1 is running on ${hostname}`);
});

app.get('/service1/hello', (req, res) => {
 console.log(` *** GET /service1/hello from ------ ${hostname} ------`); 
 res.send(' Hello from service1 ');
});

app.get('/service1/hello/world', (req, res) => {
 console.log(` *** GET /service1/hello/world from ------ ${hostname} ------`);  
 res.send(' Hello World from service1');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
