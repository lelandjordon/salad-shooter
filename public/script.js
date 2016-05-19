"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Salad", SaladFactory)
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

  SaladFactory.$inject = ["$resource"];
  function SaladFactory($resource){
    var Salad = $resource("/api/salads/:text");
    return Salad;
  }

  IndexCtrl.$inject = ["Salad"];
  function IndexCtrl(Salad){
    var vm = this;
    vm.salads = Salad.query();
  }


})();
