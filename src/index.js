module.exports = function multiply(first, second) {
    if( first.length < second.length )
    {
        let temp = second;
        second = first;
        first = temp;
    }
    let ar1 = first.split( '' ), ar2 = second.split( '' ), r = [];
    let rlen = ar1.length + ar2.length; 
    for( var k = 0; k < rlen; k++ )
        r[ k ] = 0;
    for( var j = 0; j < ar2.length; j++ ) 
        for( var i = 0; i < ar1.length; i++ )
            r[ 1 + i + j ] += ar1[ i ] * ar2[ j ];   

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
