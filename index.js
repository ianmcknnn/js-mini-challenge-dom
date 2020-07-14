/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'red'


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

let container = document.querySelector(".player-container")

for(let i = 0; i < PLAYERS.length; i++){
	let player = document.createElement("DIV")
	let name = document.createElement("H3")
	let image = document.createElement("IMG")
	let nickname = document.createElement("EM")
	
	player.className = "player"
	player.setAttribute("data-number", PLAYERS[i]["number"])
	nickname.innerText = PLAYERS[i]["nickname"]

	name.innerHTML = `${PLAYERS[i]["name"]} (${nickname.outerHTML})`
	
	image.src = PLAYERS[i]["photo"]
	image.alt = PLAYERS[i]["name"]

	player.appendChild(name)
	player.appendChild(image)

	container.appendChild(player)
}


/***** Deliverable 4 *****/

let imposter = document.querySelector("div.player-container div.player[data-number='7']")

container.removeChild(imposter)
