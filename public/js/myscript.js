(function() {
	$('div#request-api button').on({
		'click' : function(e) {
			e.preventDefault();
			console.log('button clicked');
		},
	});

	$('document').ready(function() {
		var canvas = $('#canvas'),
			context = canvas.get(0).getContext("2d"),
			video = $('#video'),
			videoObj = {
				'video': true,
			},
		errBack = function(err) {
			console.log("Video capture error: " + err.code);
		};

		// Put video listeners into place
		if(navigator.getUserMedia) { // Standard
			navigator.getUserMedia(videoObj, function(stream) {
				video.src = stream;
				video.play();
			}, errBack);
		} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
			navigator.webkitGetUserMedia(videoObj, function(stream){
				video.src = window.webkitURL.createObjectURL(stream);
				video.play();
			}, errBack);
		}
		else if(navigator.mozGetUserMedia) { // Firefox-prefixed
			navigator.mozGetUserMedia(videoObj, function(stream){
				video.src = window.URL.createObjectURL(stream);
				video.play();
			}, errBack);
		}
	});

	console.log('App sucessfully loaded !');
})();
