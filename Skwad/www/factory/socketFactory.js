/**
 * Created by gabriel on 2/20/2016.
 */

angular.module('skwad.socketFactory', ['skwad.settingsFactory'])

  .factory('socketFactory', function(settingsFactory) {
      var socket = null;
      var scope = null;
      var nearby = null;


    function getGeoLocation() {
          return {
              latitude: 0.0,
              longitude: 0.0
          }
      }

      return {
          bindScope: function(_scope) {
              scope = _scope;
          },
          requestNearbyUsers: function() {

              console.log("requesting nearby users");

              if (scope == null) return;
              socket = io("142.157.80.44:7777");

              console.log("setup");
              var geo = getGeoLocation();
              socket.emit('setup', {
                  userID: settingsFactory.getUsername(),
                  latitude: geo.latitude,
                  longitude: geo.longitude
              });

              socket.on('nearby user response', function(data) {

                console.log("received nearby users " + data);

                nearby = data;
                var usernames = [];
                for (var user in data) {
                  usernames.push({"fullname": user.userID});
                }
                scope.usernames = usernames;
              });

              socket.on('new nearby user', function(data) {
                nearby[data.userID] = data;
                for (var user in scope.usernames) {
                  if (user.fullname == data.userID)
                    return;
                }
                scope.usernames.push({"fullnames": data.userID});
              });

              console.log("Emitting request nearby");
              socket.emit('request nearby');
          }
      }

  });


