var net = require('net');
var server = net.createServer(function(c) {
  c.on('connect', function() {
    c.write("Howdy, how have you been? \n");
  }).on('data', function( data ) {
    c.write( data);
  });
});
server.listen(8124, function() { //'listening' listener
  console.log('server binded');
});
