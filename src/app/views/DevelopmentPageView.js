import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

import template from '../templates/developmentTemplate.hbs';

export default class DevelopmentPageView extends Marionette.ItemView{

  get template() { return template; }

};
