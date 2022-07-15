const character = document.getElementById("character");
const monster = document.getElementById("monster");

//*github dino game and T-Rex game
const jump = function () {
  if(character.classList!=='jump'){
    character.classList.add('jump');
    
  }
  setTimeout(function(){
    character.classList.remove('jump');
  }, 300)
}

let collision = setInterval(function(){
  let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
  let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue('left'));
  if(monsterLeft<10 && monsterLeft > 0 && characterBottom >= 100){
    alert('Game Over');
  }
}, 10);

document.addEventListener("keydown", function(event){
  jump()
})
