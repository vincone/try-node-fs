var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");

var app = express();

app.use(bodyParser());

app.listen(8080);

app.get('/', function (req, res) {
    readFile(res);
});

app.post('/text', function (req, res) {
    if(req.body.text){
        var text = req.body.text;
        writeFile(text);
        res.send("Updated");
    } else {
        res.send('something wrong or text is empty');
    }
    });
function readFile(res){
    fs.readFile('text.txt', function (err, logData) {
        if (err) throw err;
        var text = logData.toString();
        res.send(text);
    });
}

function writeFile(string){

    fs.writeFileSync('text.txt', string);
}
