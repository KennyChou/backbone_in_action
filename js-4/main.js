require({
  baseUrl: './',
  paths: {
    js: 'js-4',
    order: 'lib/requirejs/order',
    text: 'lib/requirejs/text'
  },
});

require([
  'order!lib/jquery/jquery-min',
  'order!lib/underscore/underscore-min',
  'order!lib/backbone/backbone-min',
  'order!bootstrap/js/bootstrap.min',
  'order!js/app',
], function () {
  App = _.last(arguments);
  App.initialize();
});