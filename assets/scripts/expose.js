// expose.js

window.addEventListener('DOMContentLoaded', init);
const Audio = document.querySelector('audio');
const image = document.querySelector('img');
const button = document.querySelector('button');
var useConffetti = false;
const confetti = new JSConfetti();
function init(){

 
  button.addEventListener('click', sound);
  document.getElementById('horn-select').addEventListener('change', changeHorn);
  document.getElementById('volume').addEventListener('input', changeVolume);
}


function sound() {
  // code to execute when the button is clicked
  Audio.play();
  if(useConffetti){
    JSConffetti.addConfetti({
      confettiColors: [[255, 0, 0], [0, 255, 0], [0, 0, 255]]
    })
  }

};
function changeHorn() {
  //const dropdown = document.getElementById("mySelect");
  const hornType = document.getElementById('horn-select');
  const selectedValue = hornType.value;
  var image = imageList[0];
  image.src = 'assets/images/' + selectedValue + '.svg';
  audio.src = 'assets/audio/' + selectedValue + '.mp3';
  useConffetti = (hornType == 'party-horn')
}
function changeVolume(){
  var volumeLevel = document.getElementById('volume').value;
  var image = imageList[1];
  if(volumeLevel == 0){
    image.src = 'assets/icons/volume-level-0.svg';
  }
  else if(volumeLevel < 33){
    image.src = 'assets/icons/volume-level-1.svg';
  }
  else if(volumeLevel < 67){
    image.src = 'assets/icons/volume-level-2.svg';
  }
  else{
    image.src = 'assets/icons/volume-level-3.svg';
  }
  Audio.value = volumeLevel/100;
}

