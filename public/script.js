"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router);

  Router.$inject = ["$stateProvider"];
  function Router($stateProvider){
    $stateProvider
    .state("index", {
      url:         "/",
      templateUrl: "/assets/html/salads-index.html"
    })
    .state("show", {
      url:         "/:title",
      templateUrl: "/assets/html/salads-show.html"
    });
  }



})();
