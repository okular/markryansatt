import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

import template from '../templates/contactTemplate.hbs';

export default class ContactPageView extends Marionette.ItemView{

  get template() { return template; }

};
