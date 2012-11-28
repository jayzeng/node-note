var http = require('http');
var port = process.env.PORT || 8000;

http.createServer( function( req, res ) {
    res.writeHead( 200, {'content-type' : 'text/plain'} );
    res.end( 'hello world' );
}).listen( port );
