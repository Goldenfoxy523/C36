class Game{

    constructor(){

    }

    // read the gameState from database
    getState(){

        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        }); 
        
        

    }

    // update/write the gameState to database
    updateState(state){

        database.ref("/").update({

            gameState: state

        })

    }

    startGame(){

        if(gameState===0){

            player = new Player();

            player.getCount();

            form = new Form();

            form.displayForm();



        }

    }

}