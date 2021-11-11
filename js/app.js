/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



/* add eventlistener for 
startgame */

const container=document.getElementsByClassName('main-container');
const start=document.getElementById("btn__reset");
const phrase_sec=document.getElementById('phrase');
const ul=phrase_sec.querySelector('ul');
const score=document.getElementById('scoreboard');
const ol=score.querySelector('ol');
let game;
start.addEventListener('click',function(){
    game=new Game();
    game.startGame();
    //Reset logic
    if (start.className==='reset'){
        ul.innerHTML='';
        for (const div of key){
            for (const btn of div.children){
                if (btn.className==='wrong'){
                    btn.setAttribute('class','key');
                    btn.disabled=false;
                }else if(btn.className==='chosen'){
                    btn.setAttribute('class','key');
                    btn.disabled=false;
                }
            };       
        };
        //Reset heart
        for (let i=0;i<5;i++){
            ol.children[i].innerHTML=
            '<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>'
        };
        
        game.startGame();
    };
});



//event listener for keyboard

const maindiv=document.getElementById('qwerty');
const keyrow=maindiv.querySelectorAll('div');
const key=document.querySelectorAll('.keyrow');
maindiv.addEventListener('click',(event)=>{
    if (event.target.tagName==='BUTTON'){
        //console.log(event.target);
        let bttn=event.target;
        let letter=bttn.textContent;
        game.handleInteraction(bttn);}
       
    // };else{

    // };
    

     



})

//extra credit : keyboard input 


const keys = document.querySelectorAll('.key');
document.addEventListener('keydown', e => {
    for(let i = 0; i < keys.length; i++){
        if(e.key === keys[i].textContent){
            keys[i].click()
}}});

//random backgroundcolor 

// code adopted from :https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

const color=()=>{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  
    document.body.style.background = bgColor;

};









