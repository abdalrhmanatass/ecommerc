$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-add-to-card=""]').click(function(e) {
		alert('هل ترغب في اضافة العنصر الى العربة');
		e.stopPropagtion();
	});
	$('.product-option input[type="radio"]').change(function() {
		$(this).parents('.product-option').siblings().removeClass('active');
		$(this).parents('.product-option').addClass('active');
	});
});
