const APIKEY = "green-math-3668"
const API = "https://console.echoar.xyz//query?key=" + APIKEY
const FILE_LINK = "https://console.echoar.xyz//query?key="+ APIKEY +"&file="
var echoDB
var storageID = {}
var innerFrame
window.addEventListener('load',
  function() {
    innerFrame = window.frames["frame"]
  }, false);

window.addEventListener('load',
  function() {
    fetch(API)
    .then((response) => response.json())
    .then((json) => {
      echoDB = json
      //console.log(echoDB)
      for(entries in echoDB["db"]) {
        tempID = entries
        storageID[echoDB["db"][tempID]["hologram"]["filename"]] =  echoDB["db"][tempID]["hologram"]["storageID"]
      }
      //console.log(storageID)
      const entityHTML = innerFrame.contentDocument.querySelector("img")
      entityHTML.setAttribute("src", FILE_LINK + storageID["01.png"])

    })
  }, false);

async function loadImage(fileName) {
  const entityHTML = innerFrame.contentDocument.querySelector("img")
  console.log(fileName)
  console.log(storageID[fileName])
  entityHTML.setAttribute("src", FILE_LINK + storageID[fileName])
  innerFrame.contentDocument.querySelector("a-image").setAttribute("src", "a");
  await sleep(5)
  innerFrame.contentDocument.querySelector("a-image").setAttribute("src", "#page");
}
