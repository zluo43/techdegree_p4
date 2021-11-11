/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
    this.missed=0;
    this.activePhrase=null;
    this.phrases=this.createPhrases();
    };

    createPhrases(){
        const phrase=[new Phrase('Good Day'),
                      new Phrase('Good Night'),
                      new Phrase('Bye Darling'),
                      new Phrase('I Love you'),
                      new Phrase('Nice Job')
        ];
        return phrase
        
        

    };
    getRandomPhrase(){
        if (this.activePhrase!=null){
            this.activePhrase='';
        };
        return this.phrases[Math.floor(Math.random() * 5)]

    };
    /**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame(){
        //disable overlay

        //change to a random background color when start game
        color();
        const overlay=document.getElementById('overlay');
        overlay.style.display='none';
        
        
        //get random quote
        const rand=this.getRandomPhrase();
        rand.addPhraseToDisplay();
        this.activePhrase=rand;
    };
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin(){
        //if all classname are switched to 'show', then all revealed
        const phrase_sec=document.getElementById('phrase');
        const ul=phrase_sec.querySelector('ul');
        let show=ul.querySelectorAll('.show');
        let space=ul.querySelectorAll('.space');
        //if the length of element with class name of space and show equals 
        //the length of the phrase string itself 
        if (show.length+space.length===this.activePhrase.phrase.length){
            return true
        };
        
        //else {return null};
        
        //else {return false};

    };

    removeLife(bttn){
        if (game.activePhrase.checkLetter(bttn)===false){
            ol.children[this.missed].innerHTML=
            '<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>'
            
            
        };
        this.missed=this.missed+1;

        if (this.missed===5){
            this.gameOver(false)


        };
        
        
        


    };
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
    const message=document.getElementById("game-over-message");
    if (gameWon===true){
        message.textContent='You Win! Great Job!!';
        message.parentNode.style.display='block';
        start.setAttribute('class','reset');



    }else if(gameWon===false){
        message.textContent='Game Over! Better Luck Next Time!';
        message.parentNode.style.display='block';
        start.setAttribute('class','reset');


    };

    
};

handleInteraction(button){
    //add 'wrong' CSS to letter
    if (game.activePhrase.checkLetter(button.textContent)===false){
         button.setAttribute('class','wrong');
         game.removeLife(button);
         button.disabled=true;
         //my gameover is included in removeLife()
        }else{
            button.setAttribute('class','chosen');
            game.activePhrase.showMatchedLetter(button.textContent);
            button.disabled=true;
            //this.checkForWin();
            game.gameOver(game.checkForWin());
        };
        
    };
    
    //console.log(typeof(letter))

};




