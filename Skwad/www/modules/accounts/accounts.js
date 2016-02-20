/**
 * Created by mathieudiab on 16-02-20.
 */
angular.module('skwad.accounts', [])

  .controller('AccountsCtrl', function($scope) {

    var accounts = [
      {"account": "Facebook"},
      {"account": "Twitter"},
      {"account": "Instagram"},
      {"account": "LinkedIn"},
      {"account": "Email"},
      {"account": "Phone Number"}
    ];


    $scope.accounts = accounts;



  });
