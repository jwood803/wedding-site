var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Config
app.set('port', (process.env.PORT || 3000));
app.use('/app', express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), function() {
    console.log('MEAN app listening on port ' + app.get('port'));
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});