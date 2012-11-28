var dns = require( 'dns' );
var targetSite = 'www.google.com';

dns.resolve4(targetSite, function(err, ips) {
    if( err ) throw err;

    console.log('%s resolved to %s', targetSite, JSON.stringify(ips));

    ips.forEach(function(ip) {
        dns.reverse(ip, function(err, domains) {
            if( err ) { console.log(err.message); }

            console.log( 'Reversed domain for ' + ip + ' is: ' + JSON.stringify( domains ) );
        });
    });
});
