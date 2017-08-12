import angular from 'angular';
import "./app.templates";
import SocketService from './socket-service';
import TestComponent from './smoke-test/test-component';
import Conversations from './conversations/conversations';
import Authenticate from './authenticate/authenticate';

let webSMS = angular.module('webSMS', ['templates'])

// comment-out this line to stop printing debug messages in console
console.debug = console.log;
// using console.table -- real cool!
// https://blog.mariusschulz.com/2013/11/13/advanced-javascript-debugging-with-consoletable
// using colors in console -- another cooly!
// https://i.stack.imgur.com/DFJBd.png

webSMS
  .component('test', TestComponent)
  .component('conversations', Conversations)
  .component('authenticate', Authenticate)
  .service('SocketService', SocketService)
  .factory('httpRequestInterceptor', function () {
    return {
      request: function (config) {        
        config.headers['Auth-Key'] = window.auth_value;
        return config;
      }
    };
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
  });

  export default webSMS.name;