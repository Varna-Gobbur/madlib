// madlib.js

function generateStory() {
  var color1 = document.getElementById("color1").value;
  var color2 = document.getElementById("color2").value;
  var adjective1 = document.getElementById("adjective1").value;
  var pluralNoun = document.getElementById("pluralNoun").value;
  var place = document.getElementById("place").value;

  var story = `Once upon a time in a land of ${color1} and ${color2}, there lived a ${adjective1} group of ${pluralNoun}. One day, they decided to embark on a journey to the enchanting ${place}. The landscape was painted with hues of ${color1} and ${color2}, creating a magical and ${adjective1} atmosphere. It was a truly ${adjective1} adventure!`;

  document.getElementById("textarea").innerText = story;
}
