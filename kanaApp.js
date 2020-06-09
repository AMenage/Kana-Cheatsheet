// Array of kana cheatsheet locations
var pageArray = [hiragana.html, katakana.html]; 
var currentPage; 					  // Cheatsheet filler
// Check for current cheatsheet
/*if (window.location.href == pageArray[0]) {
	currentPage = "hira";
} else if*/ 

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
}

// Play stored pronunciation
function pronounce() {
	var audio = new Audio(charFolderAudio);
	audio.play();
}

// Button for debugging
function bugger() {
	alert(document.URL);
}