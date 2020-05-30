// Cheatsheet reference variable; user starts in hiragana cheatsheet
var hiraganaPage = true;

// Character folder variables
var charFolderAudio = 'hiragana/a/a.wav'; // Pronunciation audio file storage
var charFolderStroke; 					  // Stroke order file storage

// Play pronunciation of kana character
function playAudio(aSource) {
	var audio = new Audio(aSource);
	window.alert(aSource);
	audio.play();
}

// Change selected kana character at side of browser
function changeChar(theChar) {
  if (hiraganaPage == true) {
	  charFolderAudio = "hiragana/" + theChar + "/" + theChar + ".wav";
	  charFolderStroke = "hiragana/" + theChar + "/" + theChar + "-Hira-stroke.png";
  }
  else {
	  charFolderAudio = "katakana/" + theChar + "/" + theChar + ".wav";
	  charFolderStroke = "katakana/" + theChar + "/" + theChar + "-Kata-stroke.png";
  }
  document.getElementById("kanaChar").src = charFolderStroke;
  playAudio(charFolderAudio);
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