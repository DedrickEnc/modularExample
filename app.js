var express = require('express');
var app = express();

var Admin = require('./admin/AdminApp');
var Finance = require('./finance/FinanceApp');

app.use(express.static('www/'));

// mounting admin and finance to respectively /admin and /finance paths
app.use('/admin', new Admin().publish());
app.use('/finance', new Finance().publish());

app.listen(3004, function (){
    console.log('le serveur ecoute au port 3004');
});

