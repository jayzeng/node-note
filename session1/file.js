var fs = require('fs');

fs.readFile( __dirname + '/README.md', 'utf-8', function(err, data) {
    if( err ) {
        throw err;
    }
    console.log( data );
});
