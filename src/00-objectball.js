

function gameObject(){

   const home= {
    teamName:"Brooklyn Nets",
    colors:["Black",'White'],
    players:[
    

       { playerName:"Alan Anderson",
          number:"0",
            shoe:"16",
            points:"22",
            rebounds:"12",
            assists:"12",
            steals:"3",
            blocks:"1",
            slamDunks:"1" 
        },
    

      {
         playerName:"Reggie Evans",
          number:"30",
         shoe:"14",
         points:"1",
         rebounds:"12",
         assists:"12",
         steals:"12",
         blocks:"12",
         slamDunks:"7",
        },
    
        
        {
            playerName:"Brook Lopez",
          number:"11",
            shoe:"17",
            points:"17",
            rebounds:"19",
            assists:"10",
            steals:"3",
            blocks:"1",
            slamDunks:"15",
        },

        
           { 
            playerName:"Mason Plumlee",
             number:"1",
                shoe:"19",
                points:"26",
                rebounds:"12",
                assists:"6",
                steals:"3",
                blocks:"8",
                slamDunks:"5",
            },
            
        
                {
                    playerName:"Jason Terry",
                  number:"31",
                    shoe:"15",
                    points:"19",
                    rebounds:"2",
                    assists:"2",
                    steals:"4",
                    blocks:"11",
                    slamDunks:"1",
            
                },
            ]
        }

       const away={
            teamName:"Charlotte Hornets",
            colors:["Turquoise, Purple"],
            players:[
            
        
               { playerName:"Jeff Adrien",
                  number:"4",
                    shoe:"18",
                    points:"10",
                    rebounds:"1",
                    assists:"1",
                    steals:"2",
                    blocks:"7",
                    slamDunks:"2" 
                },
            
        
              {
                 playerName:"Bismak Biyombo",
                  number:"0",
                 shoe:"16",
                 points:"12",
                 rebounds:"4",
                 assists:"7",
                 steals:"7",
                 blocks:"15",
                 slamDunks:"10",
                },
            
                
                {
                    playerName:"DeSagna Diop",
                  number:"2",
                    shoe:"14",
                    points:"24",
                    rebounds:"12",
                    assists:"12",
                    steals:"4",
                    blocks:"5",
                    slamDunks:"5",
                },
        
                
                   { 
                    playerName:"Ben Gordon",
                     number:"8",
                        shoe:"15",
                        points:"33",
                        rebounds:"3",
                        assists:"2",
                        steals:"1",
                        blocks:"1",
                        slamDunks:"0",
                    },
                    
                
                        {
                            playerName:"Brendan Haywood",
                          number:"33",
                            shoe:"15",
                            points:"6",
                            rebounds:"12",
                            assists:"12",
                            steals:"22",
                            blocks:"5",
                            slamDunks:"12",
                    
                        },
                    ]
             
                }
                return{home,away}
            }
        console.log(gameObject())


        function homeTeamName(){
            return gameObject()['home']['teamName']
          }
          
          console.log(homeTeamName())

          function awayTeamName(){
            return gameObject()['away']['teamName']
          }
          
          console.log(awayTeamName())


          function numPointsScored(names) {
            let game = gameObject();
            for (let gameKey in game) {
              
              let teamObj = game[gameKey];
              for (let teamKey in teamObj) {
            

                let data = teamObj.player;
               for (let key in data) {
                  let player= key
                  if(player === teamKey){
                    const points= data[key].points
                    return `${names}has scored ${points}points`
                  }
                }
              }
            }
          } 

          numPointsScored()

          function shoeSize(names) {
            let game = gameObject();
            for (let gameKey in game) {
              
              let teamObj = game[gameKey];
              for (let teamKey in teamObj) {
            

                let data = teamObj.player;
               for (let key in data) {
                  let player= key
                  if(player === teamKey){
                    const shoeSize= data[key].shoe
                    return `${names} shoe size is${shoeSize}`
                  }
                }
              }
            }
          } 
          shoeSize
            
            
        
          function teamColors(names) {
            let game = gameObject();
            for (let gameKey in game) {
              
              let teamObj = game[gameKey];
              for (let teamKey in teamObj) {
            

                let data = teamObj.player;
               for (let key in data) {
                  let player= key
                  if(player === teamKey){
                    const teamColors= data[key].color
                    return `${names}team colors are [${teamColors}]`
                  }
                }
              }
            }
          } 
          teamColors

          function teamNames(names) {
            let game = gameObject();
        
              
              let teamObj = game[gameKey];
              for (let teamKey in teamObj) {
            

                let data = teamObj.player;
               for (let key in data) {
                  let player= key
                  if(player === teamKey){
                    const teamNames= data[key].names
                    return `the ${names} for the team name is ${teamNames}`
                  }
                }
              }
            }
            teamNames
             
            function playerNumbers(names) {
                let game = gameObject();
                for (let gameKey in game) {
                  
                  let teamObj = game[gameKey];
                  for (let teamKey in teamObj) {
                
    
                    let data = teamObj.player;
                   for (let key in data) {
                      let player= key
                      if(teamNames === teamKey){
                        const playerNumbers= data[key].names
                        return `Jersey numbers for ${names} are [${playerNumbers}]`;

                      }
                    }
                  }
                }
              } 
              playerNumbers

              function playerStats  (names){
                const game = gameObject();
                for(const gameKey in game ){
                    const teamObj = game[gameKey];
                    const data = teamObj.players;
                    for(const key in data){
                        const player = key;
                        if( player === names){
                          return data[key]
                        }
                    }
                }
            }
            playerStats();

            function bigShoeRebounds() {
                const game = gameObject();
                for(const gameKey in game){
                    const teamObj = game[gameKey];
                    const data = teamObj.players;
                    
                    for(const key in data){
                        console.log(data[key])
                        const player = key;
                        const shoeSize = data[key].shoe;
                       
                    }
                }
            }
        
            bigShoeRebounds()
            
              

        
 
               
        
