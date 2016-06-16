playersApp.controller('associationsController', function(playerFactory, teamFactory){
  var self = this;

  playerFactory.getPlayers(function(players){
    self.players = players;
  })

  teamFactory.getTeams(function(teams){
    self.teams = teams;
  })

  this.addAssociation = function(){
    teamFactory.addAssocitation(this.newAssociation, function(associations){
      self.associations = associations;
    })
    this.newAssociation = {};
  }

  this.deleteAssociation = function(association){
    teamFactory.deleteAssociation(association, function(associations){
      self.associations = associations;
    })
  }

})