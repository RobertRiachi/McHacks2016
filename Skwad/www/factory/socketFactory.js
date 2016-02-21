/**
 * Created by gabriel on 2/20/2016.
 */

angular.module('skwad.socketFactory', ['skwad.settingsFactory'])

  .factory('socketFactory', function(settingsFactory, $cordovaGeolocation) {
      var socket = null;
      var scope = null;
      var nearby = null;

      var geo = {
          latitude: null,
          longitude: null
      };

      return {
          bindScope: function(_scope) {
              scope = _scope;
          },
          requestNearbyUsers: function() {

              console.log("requesting nearby users");

              if (scope == null) return;
              socket = io("142.157.80.44:13033");

              console.log("setup");
              $cordovaGeolocation
              .getCurrentPosition()
              .then(function (position) {
                  geo.latitude = position.coords.latitude;
                  geo.longitude = position.coords.longitude;

                  console.log(JSON.stringify(geo));
                  socket.emit('setup', {
                      userID: settingsFactory.getUsername(),
                      latitude: geo.latitude,
                      longitude: geo.longitude
                  });

                  socket.on('nearby user response', function(data) {

                  console.log("received nearby users " + JSON.stringify(data));

                  nearby = data;
                  var usernames = [];
                  for (var user in data) {
                      usernames.push({"fullname": user.userID});
                  }
                  scope.usernames = usernames;
                });

                socket.on('new nearby user', function(data) {

                  console.log("received new user " + JSON.stringify(data));

                  nearby[data.userID] = data;
                  scope.usernames.push({"fullnames": data.userID});
                });

                console.log("Emitting request nearby");
                socket.emit('request nearby');
                }, function(err) {
                // error
              });

          }
      }

  });


