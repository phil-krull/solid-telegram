playersApp.controller('playersController', function(playerFactory){
  var self = this;

  playerFactory.getPlayers(function(players){
    self.players = players;
  })

  this.addPlayer = function(){
    playerFactory.addPlayer(this.newPlayer, function(players){
      self.players = players
    })
    this.newPlayer = {};
  }

  this.deletePlayer = function(player){
    playerFactory.deletePlayer(player, function(players){
      self.players = players;
    })
  }
})