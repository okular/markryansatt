import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

import MrSattLayoutViewTemplate from '../templates/MrSattLayoutViewTemplate.hbs';

import DevelopmentPageView from '../views/DevelopmentPageView';
import PhotographyPageView from '../views/PhotographyPageView';
import PortfolioPageView from '../views/PortfolioPageView';
import ResumePageView from '../views/ResumePageView';
import ContactPageView from '../views/ContactPageView';

import ResumeModel from '../models/ResumeModel';
import PortfolioModel from '../models/PortfolioModel';
import PhotographyModel from '../models/PhotographyModel';

export default class MrSattLayoutView extends Marionette.LayoutView{
	get template() { return MrSattLayoutViewTemplate }

	events() {
		return {
			'click .nav-link' : '_onNavClicked'
		}
	}

	regions() {
		return {
			developmentPageView: ".development-page-view",
			photographyPageView: ".photography-page-view",
			portfolioPageView: ".portfolio-page-view",
			resumePageView: ".resume-page-view",
			contactPageView: ".contact-page-view",
			contentRegion: '.content-region'
		}
	}

	onRender() {
		if( ! Backbone.History.started) Backbone.history.start();
	}

	initialize(options) {
		this.initRouter();

		this.resumeModel = new ResumeModel(options.data.resume);
		this.portfolioModel = new PortfolioModel(options.data.portfolio);
		this.photographyModel = new PhotographyModel(options.data.photography);

		this.views = {
			'developmentPageView' : DevelopmentPageView,
			'photographyPageView' : PhotographyPageView,
			'portfolioPageView': PortfolioPageView,
			'resumePageView': ResumePageView,
			'contactPageView': ContactPageView
		}
		
		this.models = {
			'resumeModel' 		: this.resumeModel,
			'portfolioModel' 	: this.portfolioModel,
			'photographyModel' 	: this.photographyModel
		}
	}

	_onNavClicked(e) {
		var navName = Backbone.$(e.currentTarget).data();

		Backbone.$('#sidebar li a.active').removeClass('active');
		Backbone.$(e.currentTarget).addClass('active');
		
		this._renderPageView(navName.name);
	}

	_renderPageView(navName) {
		var pageView = navName + 'PageView';
		var modelName = navName + 'Model';

		this.contentRegion.show(new this.views[pageView]({
			model: this.models[modelName]
		}));

		this._navigateToRoute(navName);
	}

	_navigateToRoute(navName) {
		console.log(navName);
		Backbone.history.navigate(navName, {trigger: true});
	}

	// initRouter() {
	// 	this.router = Marionette.AppRouter.extend({
	// 		routes : {
	// 		'' 		  	  : '_navigateToRoute',
	// 		'development' : '_navigateToRoute',
	// 		'photography' : '_navigateToRoute',
	// 		'portfolio'   : '_navigateToRoute',
	// 		'contact'     : '_navigateToRoute',
	// 		'resume' 	  : '_navigateToRoute'
	// 		}
	// 	});
	// }

	initRouter() {
		var capturedThis = this;

		var appRouteHandler = {
			'' 				: 'navigateToRoute',
			'development' 	: 'navigateToRoute',
			'photography' 	: 'navigateToRoute',
			'portfolio' 	: 'navigateToRoute',
			'contact'     	: 'navigateToRoute',
			'resume' 	  	: 'navigateToRoute'
		}

		var appRouterController = {
			navigateToRoute: function() {
				var viewName = location.hash.replace(/\#/g, "");
				capturedThis._renderPageView(viewName);
			}
		}

		// define an AppRouter constructor
		var router = Marionette.AppRouter.extend({});

		// create a new instance of the AppRouter
		// and assign the routes and controller
		var appRouter = new router({
			appRoutes: appRouteHandler, 
			controller: appRouterController
		});
	}


	// initRouter() {
	// 	debugger;
	// 	// cache reference to 'this' in the module scope
	// 	var capturedThis = this;

	// 	// assign route handlers to specific routes.
	// 	// In this case, 'home' is triggered when the browser
	// 	// visits index.html#home. Likewise index.html#info.
	// 	// the empty set is for an address with no hash.
	// 	var appRouteHandler = {
	// 		'' 		  	  : 'onHomeRoute',
	// 		'development' : 'onDevelopmentRoute',
	// 		'photography' : 'onPhotographyRoute',
	// 		'portfolio'   : 'onPortfolioRoute',
	// 		'contact'     : 'onContactRoute',
	// 		'resume' 	  : 'onResumeRoute'
	// 	}

	// 	// controller which contains the methods which
	// 	// are used as route handlers. These are referenced
	// 	// in the appRoutes object above.
	// 	var appRouterController = {
	// 		onHomeRoute: function() {
	// 			debugger;
	// 			capturedThis.onHomeNavigated();
	// 		},
	// 		onDevelopmentRoute: function() {
	// 			debugger;
	// 			capturedThis.onDevelopmentNavigated();
	// 		},
	// 		onPhotographyRoute: function() {
	// 			capturedThis.onPhotographyNavigated();
	// 		},
	// 		onPortfolioRoute: function() {
	// 			capturedThis.onPortfolioNavigated();
	// 		},
	// 		onContactRoute: function() {
	// 			capturedThis.onContactNavigated();
	// 		},
	// 		onResumeRoute: function() {
	// 			capturedThis.onResumeNavigated();
	// 		}
	// 	};

	// 	// define an AppRouter constructor
	// 	var router = Backbone.Router.extend({});

	// 	// create a new instance of the AppRouter
	// 	// and assign the routes and controller
	// 	var appRouter = new router({
	// 		appRoutes: appRouteHandler, 
	// 		controller: appRouterController
	// 	});
	// }

	// onDevelopmentNavigated() {	
	// 	debugger;
	// }

	// onPhotographyNavigated() {

	// }

	// onPortfolioNavigated() {

	// }

	// onContactNavigated() {

	// }

	// onResumeNavigated() {

	// }

	// onHomeNavigated() {
	// 	debugger;
	// 	// // define and display an instance of the HomeLayoutView
	// 	// var homeLayoutView = new module.HomeLayoutView();
	// 	// this.contentRegion.show(homeLayoutView);

	// 	// // update the navigation
	// 	// this.$el.find('.navButton.active').removeClass('active');
	// 	// this.ui.navHome.addClass('active');
	// }

	// /* called when the router sees that we have met the criteria
	// 	to trigger the 'onInfoRoute' handler */
	// onInfoNavigated() {
	// 	// var infoLayoutView = new module.InfoLayoutView();
	// 	// this.contentRegion.show(infoLayoutView);
	// 	// this.$el.find('.navButton.active').removeClass('active');
	// 	// this.ui.navInfo.addClass('active');
	// }
};