import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

import template from '../templates/photographyTemplate.hbs';

export default class PhotographyPageView extends Marionette.ItemView{

  get template() { return template; }

  serializeData() {
  	//debugger;
    return {
      //fix this
      model: this.model.toJSON()
    };
  }
};
