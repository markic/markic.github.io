'use strict';

$(document).ready(function () {

	// functions:
	var Util = {
		tags_f: function(items){
			return '<span>' + items.join('</span><span>') + '</span>';
		},
		paragraphs_f: function(items){
			return '<p>' + items.join('</p><p>') + '</p>';
		},
		prepareProjectData: function(template, dataArray){
			var html = '';
			for (var i = 0; i < dataArray.length; i++){
				var el = dataArray[i];

				var temp = '';
				temp = template.replace(new RegExp('{i}', 'g'), i);
				for (var name in el){
					var key = '{' + name + '}';
					if (name === 'tags'){
						temp = temp.replace(key, this.tags_f(el[name]));
					}
					else if (name === 'paragraphs'){
						temp = temp.replace(key, this.paragraphs_f(el[name]));
					}
					else {
						temp = temp.replace(key, el[name]);
					}
				}

				html += temp;
			}

			return html;
		}
	};

	var start = new Date(2014, 6, 1);
	var totalm = new Date().getFullYear() * 12 + new Date().getMonth() - start.getFullYear() * 12 - start.getMonth();
	document.getElementById('computedpf').innerHTML = 'July 2014 - present (' + (totalm / 12).toFixed(1) + ' years)';

	// data:

	var projects = [
	{
		parent: 'Quiddita',
		linkText: 'Second Hand Furniture Portal',
		clientName: 'IKEA',
		clientCountry: 'Serbia',
		durationText: 'January 2019 - present',
		logoUrl: 'img/ikea.png',
		tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'NHibernate', 'Backbone.js'],
		paragraphs: [
			'Provides IKEA vouchers in exchange for donating or recycling furniture, through onlne platform. ',
			'Under development.'
		],
	},{
		parent: 'Quiddita',
		linkText: 'Travel Insurance Web Shop',
		clientName: 'Dunav Osiguranje',
		clientCountry: 'Serbia',
		durationText: 'July - December 2018',
		logoUrl: 'img/dunav.png',
		tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'NHibernate', 'Backbone.js', 'WCF', 'Devexpress'],
		paragraphs: [
			'<a href="https://shop.dunav.com" target="_blank">Web shop</a> for online purchase of travel insurance. Dunav Insurance is the largest non-life insurance company in the Serbian insurance market.',
			'I have implemented five step wizard shoping process, including card payment provider integration, multiple insurees, packages and more. ',
			'My work also included policy holder information in Devexpress, work with WCF and WebAPI, powershell for deploy & publish, users, transactions, and other.'
		],
	},{
		parent: 'Quiddita',
		linkText: 'Insurance Offers Comparison System',
		clientName: 'Premija Plus',
		clientCountry: 'Serbia',
		durationText: 'April - July 2018',
		logoUrl: 'img/klik.png',
		tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'NHibernate', 'Backbone.js'],
		paragraphs: [
			'<a href="https://klikosiguranje.rs" target="_blank">Web shop</a> for insurance comparison and brokarage agains different insurance companies. It has been developed on multilingular Quiddita CMS though which users can edit static pages, texts, menus, documents, and other content.',
			'Brokerage is available for travel, household, life, health, casco and road insurance, where all have specific subtypes, with separate four steps wizard for every type.',
			'I have implemented various insurance companies API integration under same interface, multiple front end pages and controls, CMS funcionalities and more.'
		],
	},{
		parent: 'Quiddita',
		linkText: 'Quiddita E-Commerce Platform',
		clientName: 'Quiddita',
		clientCountry: 'Serbia',
		durationText: 'November 2017 - April 2018',
		logoUrl: 'img/elafor.png',
		tags: ['C#', 'ASP.NET MVC', 'MySQL', 'NHibernate', 'Backbone.js', 'Apache Solr'],
		paragraphs: [
			'Start-up E-Commerce connecting sellers, buyers, delivery services and individuals.' + 
			'Platform has multiple tenants, configurable categories and products for shoping, administrators, customers, suppliers and couriers who' + 
			'integrate through FrontEnd and BackOffice applications. Platform supports multiple payment types, vouchers, product import and export through angular BackOffice, etc.' +
			'This is ECommerce system build on Quiddita CMS, and it is main Quiddita product.',
			'I have worked on database and javascript optimisations, page loading speed up, multiple frontend widgets, five step wizzard ordering process, minor maintenance.' +
			'Spent few months on CMS and E-Commerce improvement, refactorings, and decoupling, DI, migration to 4.6.1 and latest versions of all third party tools, dependency cleanup and IOC.',
			'During 2018 we have extended E-Commerce with multi language and multi tenancy, development configuration and settings system, and launched more shops.',
			'I have implemented full automatic application deployment (publish, webpack, backup, azure) with powershell script.',
			'Single codebase is deployed as separate web shops, for different Tenants:' + 
			'<ul>' +
			'<li>School books webshop:  <a href="https://skolskeknjige.rs" target="_blank">https://skolskeknjige.rs</a></li>' +
			'<li>New year presents webshop: <a href="https://elafor.com/paketici" target="_blank">https://elafor.com/paketici</a></li>' +
			'<li>B2B book store: <a href="https://elafor.com" target="_blank">https://elafor.com</a></li>' +
			'<li>Kiosk print shop: <a href="http://www.easygoing.company/projects.php" target="_blank">EasyGoing Kiosk</a></li>' +
			'<li>Auto batteries and parts: <a href="http://www.smitrantrade.co.rs" target="_blank">Smitran Company</a></li>' +
			'</ul>' 
		],
	},{
		parent: 'Quiddita',
		linkText: 'Programmed Maintenance Management System',
		clientName: 'CBC Facilities',
		clientCountry: 'Australia',
		companyLink: 'https://www.conbear.com.au',
		durationText: 'January - October 2017',
		logoUrl: 'img/cbc.png',
		tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'Entity Framework', 'angular 2', 'typescript', 'TFS', 'Unity', 'Azure'],
		paragraphs: [
			'Multi tenant, cloud base facilities maintenance management solution, connecting tenants, contracts, sites, assets, locations, providers, work orders... ',
			'I have developed editable email and PDF templates in HTML, through front end application. Those templates are used to generate PDF files with HTML to PDF tools.' +
			'PDF files are zipped together with generated excel reports and emaiied to clients, using customized email templates.',
			'I had brief expirience with Azure blob storage and Azure web jobs.',
			'I have planned, estimated and implemented complex invoicing and accounting part of the system. Created UML model, designed database and implemented front end pages in angular.'
		],
	},{
		parent: 'Quiddita',
		linkText: 'Security awareness software',
		clientName: 'Polira',
		clientCountry: 'United Kingdom',
		durationText: 'September - December 2016',
		logoUrl: 'img/polira.png',
		tags: ['C#', 'ASP.NET MVC', 'MySQL', 'NHibernate', 'Backbone.js', 'require.js', 'Amazon S3'],
		paragraphs: [
			'Polira is security awareness software which helps protect client-company employees from phishing attacks from hackers. <br />' +
			'Portal sends simulated phishes (emails, SMS messages, WhatsApp messages) to the employees to test how they react and tracks if they read the email, clicked on the links, entered data on the simulated websites etc. <br />' +
			'Front end application has attack simulations with statistics, employee training, outlook integration and more.',
			'I have created authorization and authentication system, integrated few Am Charts graphs, built notifications system, worked on business logic and front end pages development, etc. <br />' +
			'Implemented nightly task service that backups database and user files to amazon s3 service.'
		],
	},{
		parent: 'Quiddita',
		linkText: 'ECommerce CMS System',
		clientName: 'Halo Oglasi',
		clientCountry: 'Serbia',
		durationText: 'July 2014 - September 2016',
		logoUrl: 'img/halooglasi.png',
		tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'NHibernate', 'Backbone.js', 'require.js', 'handlebars.js', 'HTML', 'SASS', 'Bootstrap', 'Apache Solr', 'Redis', 'NPOI', 'LightInject', 'IIS', 'SQLProfiler', 'SEO' ],
		paragraphs: [
			'Complete infrastructure and legacy website (front-end portal and a back office) for one of the largest websites in Serbia. <br />' +
			'Worked with more than 20 team members, developers, testers and designers. ',
			'<a href="https://www.halooglasi.com" target="_blank">ECommerce is active</a> since 2015 and now it has more than 200.000 unique user visits every day.',

			'Portal is based on Quiddita CMS, which was tweaked to support advertising web sites and online shops. <br />' +
			'The portal has support for unlimited number of categories (tree structure), each with attributes which are inherited from children to parents. <br />' +
			'Each attribute has predefined entry/edit controls (20+ types), search controls (displayed in search sidebar, with faceting support) and overview controls (for display in list). <br/ >' +
			'The search engine as core of solution is based on Apache Solr enterprise search server which together with implemented custom donut caching techniques provides high system performances. <br/ >' +
			'FrontEnd supports 2 forms of online payment: with credit cards (FirstData) and SMS payments (through SMS provider) and multiple types of discounts, tokens and vouchers.',

			'My work included: card payment integration, multiple CMS extensions, Apache Solr relevancy scoring and HTML rendering, many BackOffice / Front End controls and pages, XML ad import, Excel ad import via NPOI, PlanPlus and Google maps integration, ' + 
			'SignalR integration, SEO improvments, sitemap generator, razor email sending system, redis cache integration, page load speed ups, SQL and LINQ performance improvments. <br /> ' +  
			'Collaborated on: task scheduler, galeries, menus, messaging, local storage, memcached, redis, kuglof cache, handlebars.net, <br />' + 
			'My duties: database design and performance improvement, front end and back end development, minimal CSS, unit testing, server log parsing, code refactor and speed up, manual testing, application deploy, maintenance, debugging, bug fixing and more.'
		],
	},{
		parent: 'Personal',
		linkText: 'Survival Island',
		linkURL: 'https://github.com/markic/survival-island',
		durationText: 'September - October 2013',
		paragraphs: [
			'First person (3D) puzzle action game, developed in unity game engine using C# and javascript. ' +
			'<a href="http://markic.github.io/survival-island/">You can try it here</a>'],
		tags: ['C#', 'Unity'],
	},{
		parent: 'Personal',
		linkText: 'Space Shooter',
		linkURL: 'https://github.com/markic/space-shooter',
		durationText: 'September - November 2012',
		paragraphs: [
			'Classic 2D arcade game, developed in XNA 4.0 Game studio (C#). '
		],
		tags: ['C#', 'XNA'],
	},{
		parent: 'Other',
		linkText: 'Oziris Electric',
		linkURL: 'http://oziriselektrika.com/',
		durationText: 'October 2018',
		paragraphs: [
			'Commercial website for oziris company that provides electric and air conditioning services. Single page website is ' + 
			'<a href="http://oziriselektrika.com" target="_blank">available online.</a>'],
		tags: ['PHP', 'js'],
	},{
		parent: 'Other',
		linkText: 'jQuery Course',
		linkURL: 'https://code.tutsplus.com/courses/30-days-to-learn-jquery',
		durationText: 'April 2012',
		paragraphs: [
			'jQuery course by Jeffrey Way, on tutsplus. '],
		tags: ['jQuery'],
	}];

	document.getElementById('')

	var template = document.getElementById('quiddita-template').innerHTML;
	var qp1 = projects.filter(x => x.parent === 'Quiddita');
	document.getElementById('quiddita-placeholder').innerHTML = Util.prepareProjectData(template, qp1);

	template = document.getElementById('personal-template').innerHTML;
	var qp2 = projects.filter(x => x.parent === 'Personal');
	document.getElementById('personal-placeholder').innerHTML = Util.prepareProjectData(template, qp2);

	var qp3 = projects.filter(x => x.parent === 'Other');
	document.getElementById('other-placeholder').innerHTML = Util.prepareProjectData(template, qp3);
});

