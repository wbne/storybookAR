options = document.getElementsByClassName("options")
//console.log(options)
var wordChoice = ""
var page = 0
var book = []
var answerChoices = []
var correctChoice = []
const INCORRECT = "Try another word!"
var rawText

//attaches a script to get the word selected on button press
for(i = 0; i < options.length; i++) {
  options[i].setAttribute('name', (i + 1))
  options[i].onclick = getWord
}

//loads the story into the script
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      rawText = this.responseText.split("\r\n")
      for(i = 0; i < rawText.length; i++) {
        if(i % 2 == 0) {
          book.push(rawText[i])
        }
        else {
          var tempArray = rawText[i].split(", ")
          var tempChoices = [tempArray[0], tempArray[1], tempArray[2], tempArray[3]]
          correctChoice.push(tempArray[4])
          answerChoices.push(tempChoices)
        }
      }
      updatePage()
    }
  };
  xhttp.open("GET", "story.txt", true);
  xhttp.send();

function updatePage() {
  if(page >= book.length) {
    for(i = 0; i < options.length; i++) {
      options[i].style.visibility = "hidden"
    }
    document.getElementsByClassName("storyText")[0].textContent = "The End."
    console.log("should be done")
    return
  }
  for(i = 0; i < options.length; i++) {
    options[i].textContent = answerChoices[page][i]
  }
  document.getElementsByClassName("storyText")[0].textContent = book[page]
}

function getWord() {
  //console.log(this.textContent)
  wordChoice = this.attributes.name.nodeValue
  if(wordChoice === correctChoice[page] || correctChoice[page] === "-1") {
    page = page + 1
    updatePage()
  }
}
