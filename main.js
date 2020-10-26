var receiveMessageButton = document.querySelector(".receive-message");
var messageDisplayBox = document.querySelector(".display");

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
var affirmationsUsed = [];
var mantrasUsed = [];

receiveMessageButton.addEventListener('click', displayMessage);

function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var newIndex = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = newIndex;
  }
  return array;
}

function displayMessage() {
  event.preventDefault();
  var div = document.querySelector(".radio-buttons")
  var radios = div.querySelectorAll("input");
  var selection;
  if (radios[0].checked) {
    shuffle(affirmations);
    for (var i = 0; i < affirmations.length; i++)
      selection = affirmations[i];
    messageDisplayBox.innerHTML = selection;
    affirmationsUsed.push(selection);
    var index = affirmations.indexOf(selection);
    affirmations.splice(index, 1);
    return selection;
  } else if (radios[1].checked) {
    shuffle(mantras);
    for (var i = 0; i < mantras.length; i++)
      selection = mantras[i];
    messageDisplayBox.innerHTML = selection;
    mantrasUsed.push(selection);
    var index = mantras.indexOf(selection);
    mantras.splice(index, 1);
    return selection;
  }
}

/*
Use JavaScript to ensure that the user never sees a
repeated message until they’ve seen them all.

After they’ve seen them all they should be notified
that they will now start seeing repeat messages.
*/
