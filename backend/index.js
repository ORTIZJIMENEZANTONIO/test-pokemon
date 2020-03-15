const express = require ('express');
const app = express();

//config
const port = process.env.port || 5000;

app.use(express.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//router
app.use(require('./routes/web'));

//home
//app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log('running in port: '+ port));