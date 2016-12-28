var port = 8080,
    express = require('express'),
    app = express().use(express.static(__dirname + '/jbrowse/JBrowse-1.12.1')), //include jbrowse local path
    http = require('http').Server(app),
    io = require('socket.io')(http);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html?data=sample_data/json/yeast');
});

io.on('connection', function (socket) {
    console.log('a user connected');
});

http.listen(port, function () {
    console.log("Node server listening on port " + port);
});