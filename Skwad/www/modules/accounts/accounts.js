/**
 * Created by mathieudiab on 16-02-20.
 */
angular.module('skwad.accounts', [])

  .controller('AccountsCtrl', function($scope, $cordovaOauth) {
    function twitterlogin (){
      cordovaOauth.twitter("43KDzSuzdGWAployL1BjOxsTw","ZPGYMjbTuX4a9ftwhH7BLEw4EY7abCNrBO0XygpVcxrW2DRe4x");

    }
    var accounts = [
      {"account": "Facebook",
        auth: null},
      {"account": "Twitter",
      auth: twitterlogin()},
      {"account": "Instagram",
        auth: null},
      {"account": "LinkedIn",
        auth: null},
      {"account": "Email",
        auth: null},
      {"account": "Phone Number",
        auth: null}
    ];


    $scope.accounts = accounts;



  });
