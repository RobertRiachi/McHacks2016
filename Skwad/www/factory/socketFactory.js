/**
 * Created by gabriel on 2/20/2016.
 */

angular.module('skwad.socketFactory', ['skwad.settingsFactory'])

  .factory('socketFactory', function(settingsFactory) {
      var socket = new io.socket();
      var scope = null;
      var nearby = null;


    function getGeoLocation() {
          return {
              latitude: 0.0,
              longitude: 0.0
          }
      }

      socket.on('connect', function() {
          var geo = getGeoLocation();
          socket.emit('setup', {
              // args.userID != null && args.latitude != null && args.longitude != null
              userID: settingsFactory.getUsername(),
              latitude: geo.latitude,
              longitude: geo.longitude
          });
      });

      socket.on('nearby user response', function(data) {
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

      return {
          bindScope: function(_scope) {
              scope = _scope;
          },
          requestNearbyUsers: function() {
              if (scope == null) return;
              socket.connect("localhost:80");
              socket.emit('request nearby');

          }
      }

  });


