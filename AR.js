const URL = "https://console.echoar.xyz/query?key=little-shape-9651"
const IMAGE_ID =  "a1252437-d5ad-48c2-aca3-72dd697d2621"
const FILE_LINK = "https://console.echoar.xyz/query?key=little-shape-9651&file="
var echoDB
var model
var storageID

window.addEventListener('load',
  function() {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        echoDB = json
        model = echoDB.db[IMAGE_ID]
        storageID = ('glbHologramStorageFilename' in model['additionalData']) ? model["additionalData"]["glbHologramStorageID"] : model["hologram"]["storageID"]
        const entityHTML = document.querySelector("a-entity")
        entityHTML.setAttribute("gltf-model", FILE_LINK + storageID)
      })
  }, false);
