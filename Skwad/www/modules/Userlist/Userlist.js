/**
 * Created by mathieudiab on 16-02-20.
 */
angular.module('skwad.userlist', [])

  .controller('UserlistCtrl', function($scope, $location) {

    var username = [
      {"fullname": "Rob"},
      {"fullname": "Gabe"},
      {"fullname": "Shaker"}
    ];


    $scope.usernames = username;

    $scope.viewAccounts = function(){
      $location.path('accounts');
    };


  });
