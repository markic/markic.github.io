'use strict';

var Util = {
	monthDifference: function monthDifference(start, end) {
		return (end.getFullYear() - start.getFullYear()) * 12 - start.getMonth() - 1 + end.getMonth();
	}
};

$(document).ready(function () {
	var maxTabs = 3;
	var duration = 600;

	var openTab = function openTab(index) {
		$('.tab-content.tab-active').removeClass('tab-active').hide();
		$('[data-content=tab' + index + ']').addClass('tab-active').fadeIn(duration);
	};

	openTab(0);

	// handle open
	$('.tab-block a').on('click', function (e) {
		var tabIndex = $(e.currentTarget).attr('data-tab');
		openTab(tabIndex);
	});

	// left click
	$('nav #nav-left a').on('click', function (e) {
		var tabIndex = $('.tab-content.tab-active').attr('data-content');
		var index = parseInt(tabIndex[maxTabs]);
		if (index > 0) {
			openTab(index - 1);
		}
	});

	// right click
	$('nav #nav-right a').on('click', function (e) {
		var tabIndex = $('.tab-content.tab-active').attr('data-content');
		var index = parseInt(tabIndex[maxTabs]);
		if (index < maxTabs) {
			openTab(index + 1);
		}
	});

	// skills
	var skillsData = [{
		name: 'Web design',
		skills: [{
			name: 'HTML',
			desc: 'from mock / cs',
			num: 5,
			start: new Date(2015, 1, 1)
		}, {
			name: 'SCSS',
			desc: 'from mock / cs',
			num: 5,
			start: new Date(2015, 1, 1)
		}, {
			name: 'Bootstrap',
			desc: 'responsive',
			num: 4,
			start: new Date(2015, 3, 1)
		}]
	}, {
		name: 'Front end development',
		skills: [{
			name: 'Angular 2+',
			desc: 'underscore',
			num: 1,
			start: new Date(2017, 0, 1)
		}, {
			name: 'Typescript',
			num: 1,
			start: new Date(2017, 0, 1)
		}, {
			name: 'Javascript / JQuery',
			num: 6,
			start: new Date(2014, 4, 1)
		}, {
			name: 'Backbone / handlebars / require',
			num: 4,
			start: new Date(2014, 6, 1),
			end: new Date(2017, 0, 1)
		}, {
			name: 'Amcharts, editors, galeries, sliders, ...',
			num: 5,
			start: new Date(2014, 6, 1),
			end: new Date(2016, 0, 1)
		}]
	}, {
		name: '.NET framework',
		skills: [{
			name: 'C# .NET, LINQ',
			desc: '6.0',
			num: 6,
			start: new Date(2014, 6, 1)
		}, {
			name: 'ASP.NET, ASP.NET MVC',
			num: 5,
			start: new Date(2015, 2, 1)
		}, {
			name: 'OWIN, Auth0, SignalR, NPOI',
			num: 3,
			start: new Date(2015, 4, 1),
			end: new Date(2016, 0, 1)
		}]
	}, {
		name: 'Databases',
		skills: [{
			name: 'NHibernate',
			num: 5,
			start: new Date(2014, 6, 1),
			end: new Date(2017, 0, 1)
		}, {
			name: 'Entity Framework',
			num: 2,
			start: new Date(2017, 0, 1)
		}, {
			name: 'SQL',
			desc: 'MSSQL',
			num: 3,
			start: new Date(2014, 6, 1)
		}, {
			name: 'mySQL',
			desc: 'Workbench',
			num: 4,
			start: new Date(2014, 6, 1),
			end: new Date(2016, 7, 1)
		}]
	}, {
		name: 'Tools',
		skills: [{
			name: 'Visual Studio',
			desc: '2012-2017',
			num: 7,
			start: new Date(2014, 6, 1)
		}, {
			name: 'TFS',
			num: 1,
			start: new Date(2017, 0, 1)
		}, {
			name: 'SVN',
			num: 15,
			start: new Date(2015, 6, 1),
			end: new Date(2017, 0, 1)
		}, {
			name: 'Other',
			desc: 'IIS, NUnit, SQL profiler',
			num: 3
		}]
	}];

	var totalMonths = Util.monthDifference(new Date(2014, 6, 1), new Date());

	var skillRowTemplate = ["<div class='col-md-{0} skill-name'>{1}</div>", "<div class='col-md-{0} skill-desc'>({1})</div>", "<div class='col-md-{0}'>{1}</div>", "<div class='col-md-{0}'><div class='skill-bar yellow' style='width:{1}%'/></div>"];

	var renderSkillRow = function renderSkillRow(row) {
		var h = "";
		h += skillRowTemplate[0].replace("{0}", !row.desc ? 5 : 2).replace("{1}", row.name);
		h += row.desc ? skillRowTemplate[1].replace("{0}", 3).replace("{1}", row.desc) : '';
		h += skillRowTemplate[2].replace("{0}", 2).replace("{1}", row.num + " project" + (row.num != 1 ? "s" : ""));

		if (row.start) {
			row.end = row.end || new Date();
			var diff = Util.monthDifference(row.start, row.end);
			var w = totalMonths > 0 ? diff / totalMonths * 100 : 0;
			h += skillRowTemplate[3].replace("{0}", 5).replace("{1}", w);
		}

		return "<div class='row'>" + h + "</div>";
	};

	var renderSection = function renderSection(section) {
		return "<h3>" + section.name + "</h3>" + section.skills.map(function (x) {
			return renderSkillRow(x);
		}).join('');
	};

	$('.skill-block').html(skillsData.map(function (x) {
		return renderSection(x);
	}).join(''));
});

