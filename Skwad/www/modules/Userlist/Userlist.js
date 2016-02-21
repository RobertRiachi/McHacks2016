/**
 * Created by mathieudiab on 16-02-20.
 */
angular.module('skwad.userlist', ['skwad.socketFactory'])

  .controller('UserlistCtrl', function($scope, $location, socketFactory) {

    socketFactory.bindScope($scope);

    $scope.viewAccounts = function(){
      $location.path('accounts');
    };

    $scope.refreshUser = socketFactory.requestNearbyUsers;

  });
