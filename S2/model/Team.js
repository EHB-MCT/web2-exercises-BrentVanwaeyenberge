 class Team {
     constructor() {
         this.teamName = 'Vangers';
         this.trainer = 'Doink';
         this.roster = [];
     }
     describe() {
         `Team ${this.teamname} with trainer ${this.trainer} has the following pokemon: ${[...this.roster]}`
     }
 }

 

 export default Team;