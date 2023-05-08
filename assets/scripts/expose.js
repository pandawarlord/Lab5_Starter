//expose.js

window.addEventListener('DOMContentLoaded', init);
//import JSConfetti from 'js-confetti'
const audio = document.querySelector('audio');
const imageList = document.querySelectorAll('img');
const button = document.querySelector('button');
var useConffetti = false;
const jsConfetti = new JSConfetti()

function init(){
 
  button.addEventListener('click', sound);
  document.getElementById('horn-select').addEventListener('change', changeHorn);
  document.getElementById('volume').addEventListener('input', changeVolume);
}

function changeHorn() {
  //const dropdown = document.getElementById("mySelect");
  const hornType = document.getElementById('horn-select');
  const selectedValue = hornType.value;
  var image = imageList[0];
  image.src = 'assets/images/' + selectedValue + '.svg';
  audio.src = 'assets/audio/' + selectedValue + '.mp3';
  useConffetti = (selectedValue == 'party-horn')
}

function sound() {
  // code to execute when the button is clicked
  audio.play();
  if(useConffetti){
    jsConfetti.addConfetti({
      confettiColors: [
        '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
      ],
    })
  }

};

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
  audio.volume = volumeLevel/100;
}

