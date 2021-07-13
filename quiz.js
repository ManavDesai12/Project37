class Quiz{
    constructor(){

    }

    getState(){
        
        var gamestateRef = database.ref("gameState")
        gamestateRef.on("value", function(data){
        gameState = data.val();
        console.log(gameState);

        })
    }

    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        console.log(gameState);
            contestant = new Contestant()
            contestant.getCount();
            question = new Question();
            question.display();

        
    }
}