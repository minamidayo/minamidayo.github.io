var syncerSounds = {
	flag: {} ,
	currentTime: null ,
} ;

(function()
{
	var setClass = 'sounds' ;
	var setDir = './sound/' ;
	var setStopButtonId = 'stop-button' ;

	var sounds = document.getElementsByClassName( setClass ) ;
	for( var i=0,l=sounds.length ; l>i ; i++ )
	{
		sounds[i].onclick = function()
		{
			var file = this.getAttribute( 'data-file' ) ;

			if( typeof( syncerSounds.flag[ file ] )=="undefined" || syncerSounds.flag[ file ] != 1 )
			{
				var audio = document.createElement( 'audio' ) ;

				audio.id = file ;
				audio.src = setDir + file + '.mp3' ;

				document.body.appendChild( audio ) ;
			}

			stopCurrentSound() ;

			document.getElementById( file ).play() ;

			syncerSounds.currentTime = file ;

			syncerSounds.flag[ file ] = 1 ;

			return false ;
		}
	}

	function stopCurrentSound()
	{
		var currentSound = document.getElementById( syncerSounds.currentTime ) ;

		if( currentSound != null )
		{
			currentSound.pause() ;
			currentSound.currentTime = 0 ;
		}
	}

/*
	document.getElementById( setStopButtonId ).onclick = function()
	{
		stopCurrentSound() ;
		return false ;
	}
*/
})() ;
