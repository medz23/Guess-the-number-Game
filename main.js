const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();
console.log(randomNum);
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new window.SpeechRecognition();

  //start recognition
recognition.start();

//capture user Speak
function onSpeak(e){
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg)

    console.log(msg);

}
//write what you said
function writeMessage(msg) {
  msgEl.innerHTML = `<div>You said: </div>
  <span class="box">${msg}</span>`;
}

//check msg
function checkNumber(msg) {
  const num = +msg;

  //if is valid Number
  if(Number.isNaN(num)){
    msgEl.innerHTML += `<div>That is not a valid number</div>`;
    return;
  }
  //check in range
  if(num > 100 || num < 1) {
    msgEl.innerHTML += '<div>Number must be between 1 and 100</div>';
    return;
  }
  //check nums
  if(num === randomNum) {
    document.body.innerHTML = `<h2> Congrats! You won! <br> <br>
    It was ${num} </h2>
    <button class="play-again" id="play-again">Play Again</button>`;
  }
  else if(num > randomNum) {
    msgEl.innerHTML += '<div>Go lower</div>';

  }
  else {
    msgEl.innerHTML += '<div>Go higher</div>'
  }
}

//random num
function getRandomNumber(){
  return Math.floor(Math.random() * 100) + 1;

  let recognition = new window.SpeechRecognition();
}

//speak result
recognition.addEventListener('result', onSpeak);

//end service
recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', e => {
  if(e.target.id == 'play-again'){
    window.location.reload();
  }
})
