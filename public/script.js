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
      url:      "/",
      templateUrl: "/assets/html/salads-index.html"
    })
    .state("show", {
      url:      "/:title",
      template: "This is not the Index, Dave."
    });
  }



})();
