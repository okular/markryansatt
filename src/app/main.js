import $ from 'jquery';
import Backbone from 'backbone';

import Router from './router';
import App from './MrSattApp';

const app = new App();

app.start();

const router = new Router();
