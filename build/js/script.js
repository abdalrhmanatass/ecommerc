$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-add-to-card=""]').click(function(e) {
		alert('هل ترغب في اضافة العنصر الى العربة');
		e.stopPropagtion();
	});
});
