"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Salad", SaladFactory)
  .controller("Index", IndexCtrl)
  .controller("Show", ShowCtrl);

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
      url:          ":_id",
      templateUrl:  "/assets/html/salads-show.html",
      controller:   "Show",
      controllerAs: "ShowVM"
    });
  }

  SaladFactory.$inject = ["$resource"];
  function SaladFactory($resource){
    var Salad = $resource("/api/salads/:_id");
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

  ShowCtrl.$inject = ["Salad", "$stateParams"];
  function ShowCtrl(Salad, $stateParams){
    var vm = this;
    vm.salad = Salad.get($stateParams);
  }


})();
