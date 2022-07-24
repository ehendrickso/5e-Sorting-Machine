
// publicly hosted API -  https://www.dnd5eapi.co/api/monsters/


const list = document.getElementById("monster-container");

const sizes = document.getElementById('size-select');

//Get whole array
async function allMonsters() {
  const res = await fetch("https://www.dnd5eapi.co/api/monsters/")
  const data = await res.json()
  return data.results
}
//get each individiual array since each object of the main array has it's on URL to search fetch-ception
async function getMonster(ref) {
  const res = await fetch("https://www.dnd5eapi.co" + ref.url)
  return res.json()
}

// async await outside of a function thanks to the module doc type, waits for the fetch to complete
const monster_refs = await allMonsters()
// resolve all pomised data from fetch so it can be displayed as an array
const monsters = await Promise.all(monster_refs.map(getMonster))


// waits for a dropdown selection to be made, based on the value selected will filter the array "sizes" to equal the value of the size and return the matching ones as the html card to be displayed. Is told to return the name, size and type for each monster.
sizes.addEventListener("change", function() {
  if (sizes.value === "tiny"){
  let tinySelect =  monsters.filter(monster => monster.size === "Tiny")
  let tinyString = tinySelect.map(function(enemy){
    return `
    <div class="card">
    <h2>${enemy.name}</h2>
    <p>${enemy.size}
    ${enemy.type}</p>
    </div>
  `
  })
  list.innerHTML += tinyString.join(' ')

  } else if  (sizes.value === "medium"){
    let mediumSelect = (monsters.filter(monster => monster.size === "Medium"))
    let mediumString = mediumSelect.map(function(enemy){
      return `
      <div class="card">
      <h2>${enemy.name}</h2>
      <p>${enemy.size}
      ${enemy.type}</p>
    </div>
    `
    })
    list.innerHTML += mediumString.join(' ')

  } else if (sizes.value === "large") {
    let largeSelect = (monsters.filter(monster => monster.size === "Large"))
    let largeString = largeSelect.map(function(enemy){
      return `
      <div class="card">
      <h2>${enemy.name}</h2>
      <p>${enemy.size}
      ${enemy.type}</p>
    </div>
    `
    })
    list.innerHTML += largeString.join(' ')

  } else if (sizes.value === "huge") {
    let hugeSelect = (monsters.filter(monster => monster.size === "Huge"))
    let hugeString = hugeSelect.map(function(enemy){
      return `
      <div class="card">
      <h2>${enemy.name}</h2>
      <p>${enemy.size}
      ${enemy.type}</p>
    </div>
    `
    })
    list.innerHTML += hugeString.join(' ')


  } else if (sizes.value === "gargantuan") {
  let gargantuanSelect = (monsters.filter(monster => monster.size === "Gargantuan"))
  let gargantuanString = gargantuanSelect.map(function(enemy){
    return `
    <div class="card">
    <h2>${enemy.name}</h2>
    <p>${enemy.size}
    ${enemy.type}</p>
  </div>
  `
  })
  list.innerHTML += gargantuanString.join(' ')
  }}
  )

//waits for reset button to be pressed to reload page , will be removed later when looped listener on dropdown
  const resetButton = document.getElementById("reset-button")

  let el = resetButton.addEventListener("click", function() {
    location.reload()
  })

  // changes text color on mouse hover, holds for a 500 count and then reverts to default
  let hoverAction = resetButton.addEventListener("mouseover", function(e){
    e.target.style.color = "red";
    setTimeout(function() {
      e.target.style.color = "";
    }, 500);
  }, false)