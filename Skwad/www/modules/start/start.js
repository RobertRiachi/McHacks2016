/**
 * Created by mathieudiab on 16-02-20.
 */
angular.module('skwad.start', [])

  .controller('StartCtrl', function($scope,$location) {
    //Deferred function call

    function redirect(){
      if(settingsFactory.getLanguage() != null && settingsFactory.getFontSize() != null){
        $location.path('username');
      }
      else{
        $location.path('userlist');
      }
    }

    loadSettings().done(redirect());

  });
