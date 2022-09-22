const anagramButton = document.getElementById("anagram-button");

const anagramChecker = () => {
  let wordOne = document.getElementById("word-one").value.toLowerCase();
  let wordTwo = document.getElementById("word-two").value.toLowerCase();

  console.log(wordOne, wordTwo);
  if(wordOne.length !== wordTwo.length){
    console.log(false);
    alert("Invalid input, please write two words of the same length.");
  } else if(wordOne.split("").sort().join("") === wordTwo.split("").sort().join("")){
    console.log(true);
  } else {
    console.log(false);
  }
}

anagramButton.addEventListener("click", anagramChecker)



