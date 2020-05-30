// Cheatsheet reference variable; user starts in hiragana cheatsheet
var hiraganaPage = true;

// Character folder variables
var charFolderAudio = 'hiragana/a/a.wav'; // Pronunciation audio file storage
var charFolderStroke; 					  // Stroke order file storage

// Change selected kana character at side of browser
function changeChar(theChar) {
  // Change hiragana character if selected in hiragana page
  if (hiraganaPage == true) {
	  charFolderAudio = "hiragana/" + theChar + "/" + theChar + ".wav";
	  charFolderStroke = "hiragana/" + theChar + "/" + theChar + "-Hira-stroke.png";
  }
  // Change katakana character if selected in katakana page
  else {
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

// Check if user is in hiragana or katakana page
function pageCheck(pCon) {
	if (pCon == "hira") {
		var hiraganaPage = true;
	}
	else if (pCon == "kata") {
		var hiraganaPage = false;
	}
	else {
		window.alert("Error: Page not available."); // For unspecified page
	}
}