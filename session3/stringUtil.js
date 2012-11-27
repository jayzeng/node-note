module.exports.repeat = function( str, times ) {
    return new Array( times + 1 ).join( str );
}

module.exports.startsWith = function( str, prefix ) {
    return str.indexOf( prefix ) === 0;
}
