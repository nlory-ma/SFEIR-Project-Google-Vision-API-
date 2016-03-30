(function() {
	$('div#request-api button').on({
		'click' : function(e) {
			e.preventDefault();
			console.log('button clicked');
		},
	});
	console.log('App sucessfully loaded !');
})();
