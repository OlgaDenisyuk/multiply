module.exports = function multiply(first, second) {
    if( first.length < second.length )
    {
        var tmp = second;
        second = first;
        first = tmp;
    }
    var a1 = first.split( '' );
    var a2 = second.split( '' );
    var r = [];
    var rlen = a1.length + a2.length; 
    for( var k = 0; k < rlen; k++ )
        r[ k ] = 0;
    for( var j = 0; j < a2.length; j++ ) 
        for( var i = 0; i < a1.length; i++ )
            r[ 1 + i + j ] += a1[ i ] * a2[ j ];   

    for( var k = rlen - 1; k > 0; k-- )
        if( r[ k ] >= 10 )
        {
            r[ k - 1 ] += Math.floor( r[ k ] / 10 );
            r[ k ] %= 10;
        }
    if( r[ 0 ] == 0 )
        delete r[ 0 ];
    return r.join( '' );    
}
