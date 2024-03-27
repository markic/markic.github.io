'use strict';
document.addEventListener("DOMContentLoaded", function (event) {

	var mostImpLink = document.getElementById("mostImpLink");
	mostImpLink.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent the default action of following the link
		document.getElementById("mostImpId").textContent = "Dad of two, boy and a girl.";
	});

	// functions:
	var Util = {
		tags_f: function (items) {
			return '<span>' + items.join('</span><span>') + '</span>';
		},
		paragraphs_f: function (items) {
			return '<p>' + items.join('</p><p>') + '</p>';
		},
		prepareProjectData: function (template, dataArray) {
			var html = '';
			for (var i = 0; i < dataArray.length; i++) {
				var el = dataArray[i];

				var temp = '';
				temp = template.replace(new RegExp('{i}', 'g'), i);
				for (var name in el) {
					var key = '{' + name + '}';
					if (name === 'tags') {
						temp = temp.replace(key, this.tags_f(el[name]));
					}
					else if (name === 'paragraphs') {
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
	document.getElementById('computedpf').innerHTML = '' + (totalm / 12).toFixed(1) + ' years';
	document.getElementById('computedpf2').innerHTML = 'July 2014 - Present (' + (totalm / 12).toFixed(1) + ' years)';

	// data:

	var projects = [
		{
			parent: 'Quiddita',
			linkText: 'Internal Sales Portal',
			clientCountry: 'Serbia',
			durationText: '2020 - In Progress',
			logoUrl: 'img/dunav.png',
			tags: ['C#', '.NET CORE WebAPI', 'MSSQL', 'NHibernate', 'Angular', 'DevExpress'],
			paragraphs: [
				'As a component of the Insurance CORE system for Dunav Insurance, the largest insurance company in Serbia, the Internal Sales Portal serves as a web based platform enabling employees, partners, and agents to facilitate the sale of insurance policies across various products.',
				'One of the key features is custom made Authorization Server based on the OAuth 2.0 protocol. This server supports JWT, grants, scopes, and offers multiple authentication methods (such as Active Directory, APIs, and database) under same interface and for different types of users (customers, employees, partners, etc). System integrated various APIs, SMS services and has modular and highly configurable arhictecutre.'
			],
		}, {
			parent: 'Quiddita',
			linkText: 'Travel Insurance Web Shop',
			clientCountry: 'Serbia',
			durationText: '2018 - In Progress',
			logoUrl: 'img/dunav.png',
			tags: ['C#', 'ASP.NET WebAPI', 'MSSQL', 'NHibernate', 'Angular'],
			paragraphs: [
				'Developed for Dunav Insurance, the leading insurance company in the Serbian market, the <a href="https://portal.dunav.com" target="_blank">Travel Insurance Web Shop</a> facilitates the purchase of various insurance products, including travel insurance, roadside assistance, hull collision vehicle insurance, and more. Additionally, customers can utilize the platform to file claims, lodge complaints, receive insurance offers, and access other services.',
				'Successfully handles thousands of user visits per day, ensuring smooth operation even during peak times, with over half a million quotations created from 2018. One of the most challenging tasks was integration of card payment provider through which thousands of transactions where processed.'
			],
		}, {
			parent: 'Quiddita',
			linkText: 'Household Insurance Management System',
			clientCountry: 'Serbia',
			durationText: '2021',
			logoUrl: 'img/triglav.png',
			tags: ['C#', '.NET CORE WebAPI', 'MSSQL', 'NHibernate', 'Angular', 'DevExpress'],
			paragraphs: [
				'Designed and implemented an internal web based system for Triglav Insurance, enabling employees to calculate premiums, generate quotations, and issue policies for Household insurance products. More products are planned.',
				'I have also developed various reports and PDF printouts using DevExpress, enhancing data visualization and providing insights into policy-related metrics.'
			],
		}, {
			parent: 'Quiddita',
			linkText: 'Travel Agencies Portal',
			clientCountry: 'Serbia',
			durationText: '2019',
			logoUrl: 'img/uos.png',
			tags: ['C#', 'ASP.NET WebAPI', 'MSSQL', 'NHibernate', 'Backbone.js', 'Angular'],
			paragraphs: [
				'Web based system facilitating collaboration among travel agencies, insurance companies, passengers, the Association of Serbian Insurers, and Ministry of Tourism employees.',
				'I have designed model, implemented core backend logic and oversaw the development of the Angular application. One of the most interesting tasks was implementation and documentation of API used by thid parties.'
			],
		}, {
			parent: 'Quiddita',
			linkText: 'Second Hand Furniture Portal',
			clientCountry: 'Multinational',
			durationText: '2019',
			logoUrl: 'img/ikea.png',
			tags: ['C#', 'ASP.NET WebAPI', 'MSSQL', 'NHibernate', 'Angular'],
			paragraphs: [
				'Online platform that provides customers with IKEA vouchers in exchange for donating used furniture to NGOs. Multitenant and multilingular system.',
				'I have designed database model and workflow with numerous states and implemented most of the app, including background SMS scheduling system. ' +
				'One of the most interesting tasks was collaboration with a security company to ensure adherence to IKEA security standards.'
			],
		}, {
			parent: 'Quiddita',
			linkText: 'Maintenance Management System',
			clientCountry: 'Australia',
			companyLink: 'https://www.conbear.com.au',
			durationText: '2017',
			logoUrl: 'img/cbc.png',
			tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'Entity Framework', 'Angular', 'Unity', 'Azure', 'OData'],
			paragraphs: [
				'Facilities maintenance management solution, connecting tenants, contracts, sites, assets, locations, providers and tracking work orders all over the Australia.',
				'My most interesting task was work with Azure WebJobs, BlobStorage, Azure Queues and MS Graph API. '
			],
		}, {
			parent: 'Quiddita',
			linkText: 'Security awareness software',
			clientCountry: 'United Kingdom',
			durationText: '2016',
			logoUrl: 'img/polira.png',
			tags: ['C#', 'ASP.NET MVC', 'MySQL', 'NHibernate', 'Backbone.js', 'Am Charts', 'Amazon S3'],
			paragraphs: [
				'Polira is a cutting-edge security awareness software designed to safeguard client-company employees from phishing attacks orchestrated by hackers. The software achieves this by conducting simulated phishing attacks, including emails, SMS messages, and Viber/WhatsApp messages, and monitoring employee responses.',
				'My most interesting task was integration of Am Charts graphs and work with Amazon S3. '
			],
		}, {
			parent: 'Quiddita',
			linkText: 'Advertising Portal',
			clientCountry: 'Serbia',
			durationText: '2014 - 2016',
			logoUrl: 'img/halooglasi.png',
			tags: ['C#', 'ASP.NET MVC', 'MSSQL', 'NHibernate', 'Backbone.js', 'Bootstrap/SASS', 'Solr', 'Redis'],
			paragraphs: [
				'System for one of Serbia largest advertising platform. Core of the solution is based on Solr search engine. The development team, comprising over 20 members including QAs, designers, and engineers, collaborated to create a high-performance portal. ',
				'With over 250,000 unique user visits daily, the <a href="https://www.halooglasi.com" target="_blank">platform</a> presented significant performance challenges. ',
				'Besides frontend, backend and database development I have implemented various integrations including card payment integration, Redis cache integration, SignalR for real-time updates, XML and Excel import/export functionalities, as well as integration with PlanPlus and Google Maps. '
			],
		}, {
			parent: 'Other',
			linkText: 'Business Generator',
			linkURL: 'https://biznisgenerator.rs/',
			durationText: '2019',
			paragraphs: [
				'Commercial website that uses math based algorithms to calculate and propose the most predictable business startup for the customers.'],
			tags: ['.NET', 'C#', 'Entity Framework', 'bootstrap', 'js'],
		}, {
			parent: 'Other',
			linkText: 'Oziris Electric',
			linkURL: 'https://oziriselektrika.com/',
			durationText: '2018',
			paragraphs: [
				'Commercial website for oziris company that provides electric and air conditioning services. '],
			tags: ['PHP', 'js'],
		}, {
			parent: 'Personal',
			linkText: 'Survival Island',
			linkURL: 'https://github.com/markic/survival-island',
			durationText: '2013',
			paragraphs: [
				'First person (3D) puzzle action game, developed in unity game engine using C# and javascript. You can try it via github page.'],
			tags: ['C#', 'Unity'],
		}, {
			parent: 'Personal',
			linkText: 'Space Shooter',
			linkURL: 'https://github.com/markic/space-shooter',
			durationText: '2012',
			paragraphs: [
				'Classic 2D arcade game developed in XNA 4.0 Game studio (C#). '
			],
			tags: ['C#', 'XNA'],
		}];

	var template = document.getElementById('quiddita-template').innerHTML;
	var qp1 = projects.filter(x => x.parent === 'Quiddita').filter((obj, i) => i % 2 === 0);;
	document.getElementById('quiddita-placeholder1').innerHTML = Util.prepareProjectData(template, qp1);
	var qp2 = projects.filter(x => x.parent === 'Quiddita').filter((obj, i) => i % 2 !== 0);
	document.getElementById('quiddita-placeholder2').innerHTML = Util.prepareProjectData(template, qp2);

	template = document.getElementById('personal-template').innerHTML;
	var qp3 = projects.filter(x => x.parent === 'Personal');
	document.getElementById('personal-placeholder').innerHTML = Util.prepareProjectData(template, qp3);

	var qp4 = projects.filter(x => x.parent === 'Other');
	document.getElementById('other-placeholder').innerHTML = Util.prepareProjectData(template, qp4);

});

