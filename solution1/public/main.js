const anagramButton = document.getElementById("anagram-button");

const anagramChecker = () => {

  const wordOne = document.getElementById("word-one").value.toLowerCase();
  const wordTwo = document.getElementById("word-two").value.toLowerCase();
  const isAnagram = document.getElementById("is-anagram");
  isAnagram.innerText = "";

  if (wordOne.length !== wordTwo.length) {
    console.log(false);
    alert("Invalid input, please write two words of the same length.");
  } else if (
    wordOne.split("").sort().join("") === wordTwo.split("").sort().join("")
  ) {
    console.log(true);
    const success = document.createElement("h2");
    success.className = "success";
    success.innerText = "Congratulations, the words are anagrams!";
    isAnagram.append(success);
  } else {
    console.log(false);
    const fail = document.createElement("h2");
    fail.className = "fail";
    fail.innerText = "Sadly the words are not anagrams.";
    isAnagram.append(fail);
  }
};

anagramButton.addEventListener("click", anagramChecker);
