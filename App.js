var fs = require('file-system');
var express = require('express'),
    http = require('http'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express();
// eslint-disable-next-line global-require
var dbOperations = require("./dbOperations.js");
var logFmt = require("logfmt");

app.set('views', __dirname + '/views') ;

app.use(express.static(__dirname + '/client'));
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

app.get('/' , function(req,res) {
    res.sendfile('views/index.html');
});

app.get('/checkcompany', function(req,res){
    dbOperations.checkandAddCompany(req,res);
});

app.get('/admin' , function(req,res) {
    res.sendfile('views/admin.html');
});
app.get('/readRecords', function(req,res){
    dbOperations.getRecords(req,res);
});

app.get('/db/delRecord', function(req,res){
    dbOperations.delRecord(req,res);
});

app.get('/db/createTable', function(req,res){
    dbOperations.createTable(req,res);
});

app.get('/db/dropTable', function(req,res){
    dbOperations.dropTable(req,res);
});
