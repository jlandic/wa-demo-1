const poem = [
  "Hold fast to dreams",
  "For if dreams die",
  "Life is a broken-winged bird",
  "That cannot fly",
  "",
  "Hold fast to dreams",
  "For when dreams go",
  "Life is a barren field",
  "Frozen with snow",
];

function shuffled(word) {
  var shuffledWord = '';
  var letters = word.split('').slice(1, -1);

  while (letters.length > 0) {
      shuffledWord += letters.splice(letters.length * Math.random() << 0, 1);
  }

  return word[0] + shuffledWord + word[word.length-1];
}

function displayShuffledPoem() {
  const mod = poem.map(line => {
    return line.split(" ").map(word => word.length == 0 ? [] : shuffled(word)).join(" ");
  })

  document.getElementById("poem").innerHTML = mod.join("<br>");

  setTimeout(
    displayShuffledPoem,
    900,
  );
}

(function() {
  setTimeout(displayShuffledPoem, 3000);

  document.getElementById("poem").innerHTML = poem.join("<br>");
})();
