// https://www.freetogame.com/api/game?id=452

// grabbing essentials
const gameThumbnail = document.getElementById("gameThumbnail")
const gameTitle = document.getElementById("gameTitle")
const gameStatus = document.getElementById("gameStatus")
const gameGenre = document.getElementById("gameGenre")
const gamePlatform = document.getElementById("gamePlatform")
const gamePublisher = document.getElementById("gamePublisher")
const gameDeveloper = document.getElementById("gameDeveloper")
const gameReleaseDate = document.getElementById("gameReleaseDate")
const gameId = document.getElementById("gameId")
const os = document.getElementById("os")
const processor = document.getElementById("processor")
const memory = document.getElementById("memory")
const graphics = document.getElementById("graphics")
const storage = document.getElementById("storage")
const ss1Holder = document.getElementById("ss1Holder")
const ss2Holder = document.getElementById("ss2Holder")
const ss3Holder = document.getElementById("ss3Holder")
const ss4Holder = document.getElementById("ss4Holder")
const gameShortDescription = document.getElementById("gameShortDescription")
const gameFullDescription = document.getElementById("gameFullDescription")


const randomNum = () => {
return Math.floor(Math.random() * 540) + 1
}

const RANDOM_URL = `https://www.freetogame.com/api/game?id=${randomNum()}`


/*random button*/
const randomBtn = document.getElementById("randomBtn")


randomBtn.onclick = () => {
  gameThumbnail.innerHTML = `<img src="img.jpg" class="thumbnail" />`
  ss1Holder.innerHTML = `<img src="img.jpg" class="thumbnail" />`
  ss2Holder.innerHTML = `<img src="img.jpg" class="thumbnail" />`
  ss3Holder.innerHTML = `<img src="img.jpg" class="thumbnail" />`
  ss4Holder.innerHTML = `<img src="img.jpg" class="thumbnail" />`
  
  fetch(RANDOM_URL)
  .then(response => response.json())
  .then(json =>{
    
    gameThumbnail.innerHTML = `<img src="${json.thumbnail}" class="thumbnail" />`
    gameTitle.innerText = `${json.title}`
    gameStatus.innerText = `${json.status}`
    gameGenre.innerText = `${json.genre}`
    gamePlatform.innerText = `${json.platform}`
    gamePublisher.innerText = `${json.publisher}`
    gameDeveloper.innerText = `${json.developer}`
    gameReleaseDate.innerText = `${json.release_date}`
    gameId.innerText = `${json.id}`
    os.innerText = `${json.minimum_system_requirements.os}`
    processor.innerText = `${json.minimum_system_requirements.processor}`
    memory.innerText = `${json.minimum_system_requirements.memory}`
    graphics.innerText = `${json.minimum_system_requirements.graphics}`
    storage.innerText = `${json.minimum_system_requirements.storage}`
    ss1Holder.innerHTML= `<img src="${json.screenshots[0].image}" class="ss" />`
    ss2Holder.innerHTML = `<img src="${json.screenshots[1].image}" class="ss" />`
    ss3Holder.innerHTML = `<img src="${json.screenshots[2].image}" class="ss" />`
    ss4Holder.innerHTML = `<img src="${json.screenshots[3].image}" class="ss" />`
    gameShortDescription.innerText = `${json.short_description}`
    gameFullDescription.innerText = `${json.description}`
    
    })
    
  }