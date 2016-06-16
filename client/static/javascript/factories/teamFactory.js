playersApp.factory('teamFactory', function(){
  var teams = [];
  var associations = [];

  return{

    getTeams: function(callback){
      callback(teams);
    },

    addTeam: function(team, callback){
      teams.push(team);
      callback(teams);
    },

    deleteTeam: function(team, callback){
      teams.splice(teams.indexOf(team), 1);
      callback(teams);
    },

    addAssocitation: function(association, callback){
      associations.push(association);
      callback(associations);
    },

    deleteAssociation: function(association, callback){
      associations.splice(associations.indexOf(association), 1);
      callback(associations);
    }
  }
})