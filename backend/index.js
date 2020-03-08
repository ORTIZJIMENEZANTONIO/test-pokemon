const express = require ('express');
const app = express();

//config
const port = process.env.port || 5000;

app.use(express.json());

//router
app.use(require('./routes/web'));


app.use(express.static(__dirname + '/public'));
app.listen(port, () => console.log('running in port: '+ port));