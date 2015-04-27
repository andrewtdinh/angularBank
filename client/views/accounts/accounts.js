'use strict';

angular.module('angBank')
.controller('AccountsCtrl', function($scope, Account){
  Account.init();

  $scope.addAccount = function(name){
    Account.add(name)
  };
});
