var hiraganaPage = document.URL.includes("hiragana.html"); // Current page condition

// Character folder variables
var charFolderAudio = 'hiragana/a/a.wav'; // Pronunciation audio file storage
var charFolderStroke; 					  // Stroke order file storage

// Change selected kana character at side of browser
function changeChar(theChar) {
  // Change hiragana character if selected in hiragana page
  if (hiraganaPage == true) {
	  charFolderAudio = "hiragana/" + theChar + "/" + theChar + ".wav";
	  charFolderStroke = "hiragana/" + theChar + "/" + theChar + "-Hira-stroke.png";
  } else { // Change katakana character if selected in katakana page
	  charFolderAudio = "katakana/" + theChar + "/" + theChar + ".wav";
	  charFolderStroke = "katakana/" + theChar + "/" + theChar + "-Kata-stroke.png";
  }
  // Change file location of kana stroke order 
  document.getElementById("kanaChar").src = charFolderStroke;
  document.getElementById("romaji").innerHTML = theChar;
}

// Play stored pronunciation
function pronounce() {
	var audio = new Audio(charFolderAudio);
	audio.play();
}