import $ from 'jquery';
import Backbone from 'backbone';

import DevelopmentPageView from './views/DevelopmentPageView';


export default Backbone.Router.extend({

  routes: {
    '': 'dashboard',
    'about': 'about',
    'contact': 'contact',
    'portfolio': 'portfolio',
    'development': 'development'
  },

  development() {
    this.view = new DevelopmentPageView();
  },

  initialize() {
    $('body').append('<div id="js-app"></div>');
  },

  development() {
    var developmentPageView = new DevelopmentPageView({
      template: _.template('Hello <%= name %> !')
    }).render();

    $('#js-app').empty().append(developmentPageView.$el);
  }
});
