'use strict';

const express = require('express');
var os = require("os");


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var hostname = os.hostname();
// App
const app = express();
app.get('/service2', (req, res) => {
  console.log(` *** GET /service2 from ------ ${hostname} ------`);
  res.send(` Service 2 is running on ${hostname}`);
});

app.get('/service2/hello', (req, res) => {
 console.log(` *** GET /service2/hello from ------ ${hostname} ------`); 
 res.send(' Hello from service2 ');
});

app.get('/service2/hello/world', (req, res) => {
 console.log(` *** GET /service2/hello/world from ------ ${hostname} ------`);  
 res.send(' Hello World from service2');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
