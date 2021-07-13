class Question{
    constructor(){
        this.input = createInput("Name")
        this.input1 = createInput("Correct Answer")
        this.button = createButton("Submit")
        

    }

    hide(){
        this.input.hide(); 
        this.input1.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h2")
        title.html("My Quiz Game")
        title.position(130, 0);

        var question1 = createElement("h3")
        question1.html("What Ring is a Square?")
        question1.position(200, 50);

        var answer1 = createElement("h4")
        answer1.html("1. Infinity Ring")
        answer1.position(300, 70);

        var answer2 = createElement("h4")
        answer2.html("2. Car Ring")
        answer2.position(300, 90);

        var answer3 = createElement("h4")
        answer3.html("3. Boxing Ring")
        answer3.position(300, 110);
        
        var answer4 = createElement("h4")
        answer4.html("4. Wedding Ring")
        answer4.position(300, 130);
        
        
        this.input.position(130, 160);
        this.input1.position(130, 200);
        this.button.position(250, 200);
        
        
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.input1.hide();
            contestant.name = this.input.value();
            contestant.answer = this.input1.value();
            playerCount += 1
            contestant.index = playerCount
            contestant.update();
            contestant.updateCount(playerCount);
        })

    }

    

    

}