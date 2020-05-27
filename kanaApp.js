// Pronunciation audio file storage
var pro = 'hiragana/a/a.wav';

// Play pronunciation of kana character
function playAudio(aSource) {
	var audio = new Audio(aSource); 
	audio.play();
}

// Change selected kana character at side of browser
function changeChar(strokeOrder, audioSource) {
  document.getElementById("kanaChar").src = strokeOrder;
  pro = audioSource;
}

// Play stored pronunciation
function pronounce() {
	playAudio(pro);
}