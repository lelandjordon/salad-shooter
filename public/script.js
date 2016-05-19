"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .controller("Index", IndexCtrl);

  Router.$inject = ["$stateProvider"];
  function Router($stateProvider){
    $stateProvider
    .state("index", {
      url:          "/",
      templateUrl:  "/assets/html/salads-index.html",
      controller:   "Index",
      controllerAs: "IndexVM"
    })
    .state("show", {
      url:          "/:title",
      templateUrl:  "/assets/html/salads-show.html"
    });
  }

  IndexCtrl.$inject = [];
  function IndexCtrl(){
    var vm = this;
    vm.salads = [
      {
        text: "test one"
      },
      {
        text: "test two"
      },
      {
        text: "Third test, Dave."
      }
    ];
  }


})();
