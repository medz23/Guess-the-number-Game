const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new window.SpeechRecognition();

  //start recognition
recognition.start();

//capture user Speak
function onSpeak(e){
    const msg = e.results[0][0].transcript;
    console.log(msg);

}


//random num
function getRandomNumber(){
  return Math.floor(Math.random() * 100) + 1;

  let recognition = new window.SpeechRecognition();
}

//speak result
recognition.addEventListener('result', onSpeak)
