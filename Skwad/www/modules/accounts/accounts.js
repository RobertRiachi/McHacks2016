/**
 * Created by mathieudiab on 16-02-20.
 */
angular.module('skwad.accounts', [])

  .controller('AccountsCtrl', function($scope, $cordovaOauth) {

    var accounts = [
      {"account": "Facebook"},
      {"account": "Twitter"},
      {"account": "Instagram"},
      {"account": "LinkedIn"},
      {"account": "Email"},
      {"account": "Phone Number"}
    ];


    $scope.accounts = accounts;


    $scope.instagramLogin = function(){
      $cordovaOauth.instagram("6dac6947026e410f887ff37c3666e71b", ['relationships']).then(function(result){
        console.log(JSON.stringify(result));
      }, function(error) {
        // error
      });

    }



  });
