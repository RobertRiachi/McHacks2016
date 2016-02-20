/**
 * Created by mathieudiab on 16-02-20.
 */
angular.module('skwad.start', ['skwad.settingsFactory'])

  .controller('StartCtrl', function($scope,$location, settingsFactory) {
    //Deferred function call

    function redirect(){
      if(settingsFactory.getUsername() == null){
        $location.path('username');
      }
      else{
        $location.path('userlist');
      }
    }

    var loadUsername= function(){
      var r = $.Deferred();

      settingsFactory.loadUsername();

      setTimeout(function () {
        r.resolve();
      }, 2500);

      return r;
    }

    loadUsername().done(redirect());

  });
