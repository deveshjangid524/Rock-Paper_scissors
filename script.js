function computerChoice(){
    let ch=Math.floor(Math.random()*3);
    switch(ch){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
    let cCount=0;
    let pCount=0;
function play(){
    
    let playerSelection=prompt("Enter your choice");
    playerSelection=playerSelection.toLowerCase();
    let computerSelection=computerChoice();
    
    
    if(computerSelection ===playerSelection){
        return "it's a tie";

    }
    else if(computerSelection==='rock' && playerSelection==='paper' || computerSelection==='paper' && playerSelection==='scissors' || computerSelection==='scissors' && playerSelection==='rock'){
        pCount++;
        return "you win "+playerSelection+" beats "+computerSelection;
    }
    else{
        cCount++;
        return "you lost "+computerSelection+" beats "+playerSelection;
    }
}

function playgame(){
    console.log(play());
    console.log(play());
    console.log(play());
    console.log(play());
    console.log(play());
    if(cCount>pCount){
        return "computer's score is "+cCount+" your score is "+pCount+" you lose";
    }
    else if(cCount<pCount){
        return "computer's score is "+cCount+" your score is "+pCount+" you win";
        
    }
        else return "computer's score is "+cCount+" your score is "+pCount+" it's a tie";
        
}

console.log(playgame());