class Contestant{
    constructor(){
       this.index = null
       this.answer = 0
       this.name = null 
    }

    getCount(){
    var countRef =  database.ref("contestantCount");
    countRef.on("value", function(data){
        playerCount = data.val();
        console.log(playerCount)
    })



    }

    updateCount(count){
    database.ref("/").update({
        contestantCount:count
    });


    }

    update(){
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).set({
        name:this.name,
        answer:this.answer
    })
        
    }

    static getPlayerInfo(){
       var playerInfo = database.ref("players")
       playerInfo.on("value", (data) => {
           allPlayers = data.val();
           console.log(allPlayers);

       }) 
    }
}