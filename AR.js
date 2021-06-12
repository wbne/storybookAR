const URL = "https://console.echoar.xyz/query?key=little-shape-9651"
const IMAGE_ID =  "a1252437-d5ad-48c2-aca3-72dd697d2621"
const FILE_LINK = "https://console.echoar.xyz/query?key=little-shape-9651&file=a1252437-d5ad-48c2-aca3-72dd697d2621"
var echoDB
var model

window.addEventListener('load',
  function() {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        echoDB = json
        model = echoDB.db[IMAGE_ID]
        //console.log(model)
        const entityHTML = document.querySelector("a-entity")
        entityHTML.setAttribute("gltf-model", FILE_LINK)
      })
  }, false);
