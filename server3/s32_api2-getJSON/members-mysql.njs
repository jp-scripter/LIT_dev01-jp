 
 pFS   = require( 'fs' )
 aText = pFS.readFileSync( `${__dirname}/members-mysql.json`, 'ASCII' )
 aText = aText.replace( //g, "'" )
 aText = aText.replace( //g, "'" )
 aText = aText.replace( //g, "'" )
 try {
     pJSON = JSON.parse( aText )
 } catch(e) { 
     nPos = e.message.match( /position (.+)/ ); nPos = nPos ? nPos[1] * 1 : 20
     console.log( e.message )
     console.log( aText.substr( nPos-20, 40 ).replace( /\n/g, "|" ) )
     console.log( "                     ^")
     process.exit()
     }
 console.dir( pJSON, { depth: 9 } )
