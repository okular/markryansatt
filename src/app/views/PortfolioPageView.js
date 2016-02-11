import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

import template from '../templates/portfolioTemplate.hbs';

export default class PortfolioPageView extends Marionette.ItemView{

  get template() { return template; }

  serializeData() {
  	//debugger;
    return {
      //fix this
      model: this.model.toJSON()
    };
  }

};
