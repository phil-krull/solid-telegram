playersApp.factory('playerFactory', function(){
  var players = [];
  return{

    getPlayers: function(callback){
      callback(players);
    },

    addPlayer: function(player, callback){
      players.push(player);
      callback(players);
    },

    deletePlayer: function(player, callback){
      players.splice(players.indexOf(player), 1);
      callback(players);
    }
  }
})