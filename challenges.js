
var scores, roundScore, activePlayer, dice, gamePlaying;
var lastDice;

init();


document.querySelector('#btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    
    dice1 = Math.floor(Math.random() * 6) +1;
    dice2 = Math.floor(Math.random() * 6) +1;
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';    
    
  if(dice1 !==1 && dice2 !==1){
    roundScore+=dice1 + dice2;    
    document.querySelector('#current-score-' + activePlayer).textContent = roundScore;    
 
} else{
        
   nextPlayer();    
}    

}            
});

document.querySelector('#btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
   var input = document.getElementById('winningScore').value;
    var winningScore;
    if(input){
        winningScore = input;
    } 
        else{
            winningScore = 100;
        }
        
        if(scores[activePlayer] >=winningScore){
       document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
       hideDice();
       gamePlaying = false; 
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        }else{
        nextPlayer(); 
    }        
    }
    

});


document.querySelector('#btn-new').addEventListener('click',init);
document.querySelector('.rules-btn').addEventListener('click',readRules);
document.querySelector('.close').addEventListener('click', closeDialog);


function nextPlayer(){
   activePlayer==0 ? activePlayer=1 :activePlayer =0; 
   hideDice();
    roundScore = 0;
       
   document.getElementById('current-score-0').textContent =0;
   document.getElementById('current-score-1').textContent =0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

function readRules(){
        document.querySelector('.dialog-box').style.display = 'flex';
    }

function closeDialog(){
    document.querySelector('.dialog-box').style.display = 'none';
}    

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    hideDice();

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-score-0').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}

function hideDice(){
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none'; 
};