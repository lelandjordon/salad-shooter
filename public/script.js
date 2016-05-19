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
      template: "This is the Index, Dave."
    })
    .state("show", {
      url:      "/:title",
      template: "This is not the Index, Dave."
    });
  }



})();
