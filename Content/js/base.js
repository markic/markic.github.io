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
		linkText: 'Parner Portal',
		clientName: 'Dunav Osiguranje',
		clientCountry: 'Serbia',
		durationText: 'January 2020 - May 2020',
		logoUrl: 'img/dunav.png',
		tags: ['C#', '.NET CORE', 'ASP.NET WebAPI', 'MSSQL', 'NHibernate', 'Angular'],
		paragraphs: [
			'Data driven application used by various business partners of the largest insurance company in Serbia, Dunav Osiguranje.', 
			'The portal has standard user management (role/permissions) system with two factor user authentication (email/SMS). Depending on the partner permissions, partner can see and search for various insurance policies and other insurance related data. ' +
			'This was the first Quiddita project developed on the .NET CORE. During development, I have also migrated 10+ years old Quiddita Framework to the .NET CORE. ' + 
			'Client is developed in Angular 9 using PrimeNG.'
		],
	},{
		parent: 'Quiddita',
		linkText: 'Travel Agencies Portal',
		clientName: 'Association of Serbian Insurers',
		clientCountry: 'Serbia',
		durationText: 'January 2019 - July 2019',
		logoUrl: 'img/uos.png',
		tags: ['C#', 'ASP.NET MVC', 'ASP.NET WebAPI', 'MSSQL', 'NHibernate', 'Backbone.js', 'Angular'],
		paragraphs: [
			'<a href="https://www.udruzenje-osiguravaca-srbije.com" target="_blank">An online portal</a> that connects travel agencies, insurance companies, association of Serbian insurers and Ministry of Tourism employees.',
			'All travel agencies in Serbia are required to keep evidence of travel arrangements and passengers, who are insured through the System. It is required by law that each passenger is insured from travel cancellation, agency bankrupcy or getting stranded. ' +
			'Insurance companies are issuing policies and licences for travel agencies, while government employees check reports and control overall process. Passenger can also check insurance data on the public part of the website.',
			'Web application is developed in Angular and ASP.NET WebAPI. I have implemented most of the back end logic and managed development of the Angular application. ' + 
			'I have also implemented and documented API that travel agencies and insurance companies can use to fully integrate solution into their own systems.',
		],
	},{
		parent: 'Quiddita',
		linkText: 'Second Hand Furniture Portal',
		clientName: 'IKEA',
		clientCountry: 'Serbia',
		durationText: 'January 2019 - August 2019',
		logoUrl: 'img/ikea.png',
		tags: ['C#', 'ASP.NET WebAPI', 'MSSQL', 'NHibernate', 'Angular'],
		paragraphs: [
			'Online shop that provides customers with IKEA vouchers in exchange for donating used furniture.', 
			'Customers can donate furniture or home appliances through five step wizard and NGOs will collect, repair, recycle or dispose donated items. ' +
			'System has a item workflow with 10+ states, scheduled SMS sending background service, website for customers and internal portal for NGOs, IKEA, Customer Service and Recycling partners.', 
			'I have designed database model, implemented complete website for customers, worked on workflow subsystem, reports, most back end logic and automated deploy with custom powershell. ' + 
			'System is multilingual, hence single code base is deployed as three separate systems for IKEA US, IKEA Serbia and IKEA Croatia and can be easily extended. ' +
			'One of the most interesting and challenging tasks was working with security penetration testing company in order to fulfill all IKEA security standards.'
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
			'I have implemented five step wizard shopping process which includes credit card payment provider integration, ' +
			'generation of reports in Devexpress, powershell for deploy and implementation of the most of the back end logic and front end pages.'
		],
	},{
		parent: 'Quiddita',
		linkText: 'Insurance Offers Comparison System',
		clientName: 'Premija Plus',
		clientCountry: 'Serbia',
		durationText: 'April - July 2018',
		logoUrl: 'img/klik.png',
		tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'NHibernate', 'Backbone.js', 'Angular'],
		paragraphs: [
			'<a href="https://klikosiguranje.rs" target="_blank">Web shop</a> for insurance comparison and brokerage against different insurance companies. Brokerage is available for travel, household, life, health, MTPL and road assitance insurance.',
			'It has been developed in multilingual Quiddita CMS through which users can edit static pages, texts, menus, documents, and other content. ' +
			'I have integrated various insurance companies APIs under same interface, implemented CMS functionalities, multiple website pages and back end logic.'
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
			'Start-up E-Commerce connecting sellers, buyers, delivery services and individuals.', 
			'Platform has multiple tenants, customers, suppliers and couriers who are interacting ' + 
			'through Website and BackOffice applications. Platform supports multiple payment types, vouchers, product excel import and export, categories, products, etc. ' +
			'I have worked on database and app optimizations, page loading speed up, multiple front end widgets, five step ordering process, maintenance, '+ 
			'refactoring and decoupling, DI and IOC introduction, migration to the latest framework, etc. ' +
			'During 2018 we have extended E-Commerce with multi language and multi tenancy, development configuration and settings system and launched more shops.',
			'I have implemented fully automated application deployment (publish, webpack, backup) with powershell script.',
			'Single codebase is deployed as separate web shops, for different Tenants:' + 
			'<ul>' +
			'<li>School books webshop:  <a href="https://skolskeknjige.rs" target="_blank">https://skolskeknjige.rs</a></li>' +
			'<li>New year presents webshop: <a href="https://elafor.com/paketici" target="_blank">https://elafor.com/paketici</a></li>' +
			'<li>B2B book store: <a href="https://elafor.com" target="_blank">https://elafor.com</a></li>' +
			'<li>Kiosk print shop: <a href="https://www.easy2u.co/" target="_blank">EasyGoing Kiosk</a></li>' +
			'<li>Auto batteries and parts (B2B): <a href="https://smitran.rs/" target="_blank">Smitran Company</a></li>' +
			'<li>Auto batteries and parts (B2C): <a href="https://akumulator.shop/" target="_blank">Smitran Company</a></li>' +
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
		tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'Entity Framework', 'Angular', 'typescript', 'TFS', 'Unity', 'Azure', 'OData'],
		paragraphs: [
			'Facilities maintenance management solution, connecting tenants, contracts, sites, assets, locations, providers and tracking work orders all over the Australia.',
			'My duties included UML and database design, estimates, back end logic and implementation of front end pages in Angular. ' + 
			'I have worked on excel generation, emailing, accounting and invoicing, integration of HTML to PDF tool, custom controls for editable email and PDF templates and more. Document conversion using Microsoft Graph API.'
		],
	},{
		parent: 'Quiddita',
		linkText: 'Security awareness software',
		clientName: 'Polira',
		clientCountry: 'United Kingdom',
		durationText: 'September - December 2016',
		logoUrl: 'img/polira.png',
		tags: ['C#', 'ASP.NET MVC', 'MySQL', 'NHibernate', 'Backbone.js', 'require.js', 'Am Charts', 'Amazon S3'],
		paragraphs: [
			'Polira is a security awareness software which helps protect client-company employees from phishing attacks from hackers. <br />' +
			'Portal sends simulated phishing attacks (emails, SMS messages, WhatsApp messages) to the employees to test how they react and tracks if they performed not trusted actions. <br />' +
			'I have created authorization and authentication system, integrated few Am Charts graphs, built notifications system and worked on business logic and front end pages development. <br />' +
			'I have also implemented nightly task service that backups database and user files to the Amazon s3 service.'
		],
	},{
		parent: 'Quiddita',
		linkText: 'ECommerce Advertising Portal',
		clientName: 'Halo Oglasi',
		clientCountry: 'Serbia',
		durationText: 'July 2014 - September 2016',
		logoUrl: 'img/halooglasi.png',
		tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'NHibernate', 'Backbone.js', 'require.js', 'handlebars.js', 'HTML', 'SASS', 'Bootstrap', 'Apache Solr', 'Redis', 'NPOI', 'LightInject', 'IIS', 'SQLProfiler', 'SEO', 'Memcached' ],
		paragraphs: [
			'Website and an internal back office for on of the largest advertising platforms in Serbia. Customers can advertise real estates, vehicles, services, jobs and everything else. <br />' +
			'I have worked with more than 20 team members, engineers, QAs and designers. ',
			'<a href="https://www.halooglasi.com" target="_blank">ECommerce is active</a> since 2015 and now has more than 200.000 unique user visits every day which made performance requirements challenging.',

			'The search engine as core of solution is based on Apache Solr enterprise search server which together with implemented custom donut caching techniques provides high system performances.',

			'My work included: card payment integration, multiple CMS extensions, Apache Solr relevancy scoring and HTML rendering, many BackOffice / Front End controls and pages, XML ad import, Excel ad import via NPOI, PlanPlus and Google maps integration, ' + 
			'SignalR integration, SEO, sitemap generator, razor email sending system, redis cache integration, page load speed-ups, SQL and LINQ performance improvments. <br /> ' +  
			'My duties: front end and back end development, database design and performance improvements, design, unit testing, server log parsing, code refactoring and speed up, manual testing, application deploy, maintenance, debugging, bug fixing and more.'
		],
	},{
		parent: 'Other',
		linkText: 'Business Generator',
		linkURL: 'https://biznisgenerator.rs/',
		durationText: 'December 2019',
		paragraphs: [
			'Commercial website that uses math based algorithms to calculate and propose the most predictable business startup for the customers.' +
			'Customer answers multiple questions and can request business plan, accounting service, website design and other business related inquiries. Single page website is ' + 
			'<a href="https://biznisgenerator.rs/" target="_blank">available online.</a>'],
		tags: ['.NET', 'C#', 'Entity Framework', 'bootstrap'],
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

