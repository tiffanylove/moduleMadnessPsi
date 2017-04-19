var http = require('http');
var mod3 = require('./modules/module3.js');

http.createServer(function (req, res){
res.writeHead(200);
res.write(mod3.heading + mod3.accountBalance);
res.end();

}).listen(5000);
