/**
 * Created by mathieudiab on 16-02-20.
 */
angular.module('skwad.username', ['skwad.settingsFactory'])

  .controller('UsernameCtrl', function($scope, $location, settingsFactory) {
    $scope.user = {
      name: ""
    };

    $scope.submit = function(){
      console.log("user: "+$scope.user.name);
      if($scope.user.name.length > 0){
        settingsFactory.setUsername($scope.user.name);
        $location.path('userlist');
      }
    };


  });
