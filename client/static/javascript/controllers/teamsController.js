playersApp.controller('teamsController', function(teamFactory){
  var self = this;

  teamFactory.getTeams(function(teams){
    self.teams = teams;
  })

  this.addTeam = function(){
    teamFactory.addTeam(this.newTeam, function(teams){
      self.teams = teams;
    })
    this.newTeam = {};
  }

  this.deleteTeam = function(team){
    teamFactory.deleteTeam(team, function(teams){
      self.teams = teams;
    })
  }
})