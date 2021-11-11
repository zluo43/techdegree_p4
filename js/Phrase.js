/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



class Phrase{
    constructor(phrase){
        this.phrase=phrase.toLowerCase();

    };
    
    
    
    
    addPhraseToDisplay(){
        const phrase_sec=document.getElementById('phrase');
        const ul=phrase_sec.querySelector('ul');
        let list_item=``;
        for (let i=0;i<this.phrase.length;i++){

            
            if (this.phrase[i]===' '){
                list_item=list_item+ `<li class="space"> </li>`
            }else{list_item=list_item+ `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`
            };
        };
 
        ul.insertAdjacentHTML('beforeend',list_item);

        };
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    * */ 
    
    checkLetter(letter){
        
        
        if (this.phrase.indexOf(letter)!=-1){
            return true
        }else {return false};


    };
    showMatchedLetter(letter){
        const phrase_sec=document.getElementById('phrase');
        const ul=phrase_sec.querySelector('ul');
        const li=ul.children;
        for (let i=0;i<this.phrase.length;i++){
            if (li[i].textContent===letter && this.checkLetter(letter)){
                li[i].setAttribute('class','show')
            };
        };


    };



   




};





