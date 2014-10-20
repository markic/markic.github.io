$(document).ready(function () {
	var maxTabs = 4;
	var duration = 600;

	var openTab = function (index) {
		$('.tab-content.tab-active').removeClass('tab-active').hide();
		$('[data-content=tab' + index + ']').addClass('tab-active').fadeIn(duration);
	}

	openTab(0);

	// handle open
	$('.tab-block a').on('click', function (e) {
		var tabIndex = $(e.currentTarget).attr('data-tab');
		openTab(tabIndex);
	});

	// left click
	$('nav #nav-left a').on('click', function (e) {
		var tabIndex = $('.tab-content.tab-active').attr('data-content');
		var index = parseInt(tabIndex[3]);
		if (index > 0) {
			openTab(index - 1);
		}
	});

	// right click
	$('nav #nav-right a').on('click', function (e) {
		var tabIndex = $('.tab-content.tab-active').attr('data-content');
		var index = parseInt(tabIndex[3]);
		if (index < maxTabs) {
			openTab(index + 1);
		}
	});
});