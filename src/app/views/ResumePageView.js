import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

import template from '../templates/resumeTemplate.hbs';

export default class ResumePageView extends Marionette.ItemView{

  get template() { return template; }

  serializeData() {
    return {
      model: this.model.toJSON()[0]
    };
  }

};
