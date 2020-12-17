class Form{

    constructor(){



    }

    displayForm(){
        
        // create a h2 element in the form-- h2, 3, h4- heading
        var title = createElement('h2');
        title.html("car racing game");
        title.position(130,0);

        var input = createInput("name");

        input.position(130,160);

        var button = createButton("play");

        button.position(250,200);

        var greeting = createElement("h3");

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount +1

            player.update(name);

            player.updateCount(playerCount);

            greeting.html("hello "+name);

            greeting.position(130,160)


        });

            

        

    }

}