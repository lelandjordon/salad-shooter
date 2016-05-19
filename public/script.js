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

  Router.$inject = ["$stateProvider", "$locationProvider"];
  function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
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
    vm.create = function(){
      Salad.save(vm.newSalad, function(response){
        vm.questions.push(response);
      });
    }
  }


})();
