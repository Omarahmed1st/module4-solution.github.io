(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['items'];
  function CategoriesController(items) {
    var catCtrl = this;
    catCtrl.items = items;
  }

})();
