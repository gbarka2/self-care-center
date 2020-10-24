var affirmationRadio = document.querySelector(".affirmation");
var mantraRadio = document.querySelector(".mantra");
var receiveMessageButton = document.querySelector(".receive-message");
var messageDisplayBox = document.querySelector(".display");
var meditationImage = document.querySelector(".meditation-image");

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];
// var currentAffirmation;
// var currentMantra;

affirmationRadio.addEventListener('click', displayMessage);
mantraRadio.addEventListener('click', displayMessage);
receiveMessageButton.addEventListener('click', displayMessage);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function generateMessage() {
//   // currentAffirmation = affirmations[getRandomIndex(affirmations)];
//   // currentMantra = mantras[getRandomIndex(mantras)];
//   // console.log(currentAffirmation);
//   // console.log(currentMantra);
// }

function displayMessage() {
/*
currently only affirmation is populating
need mantra to enter when selected via radio

attempted to create both local and global variables for the current message
still populating only the affirmation array
*/
  if (affirmationRadio) {
    var currentAffirmation = affirmations[getRandomIndex(affirmations)];
    messageDisplayBox.innerHTML = currentAffirmation;
    console.log(currentAffirmation);
  } else if (mantraRadio) {
    var currentMantra = mantras[getRandomIndex(mantras)];
    messageDisplayBox.innerHTML = currentMantra;
    console.log(currentMantra);
  }
}

/*

*/
