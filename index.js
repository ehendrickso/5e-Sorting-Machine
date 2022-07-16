
// take info from https://www.dnd5eapi.co/api/monsters/ (find monsters specifically we're not ready to do all of D&D 5e...but someday...someday)


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

// async await outside of a function thanks to the module doc type
const monster_refs = await allMonsters()
// resolve all pomised data so we can sort it
const monsters = await Promise.all(monster_refs.map(getMonster))


// keeps an eye out for when the dropdown selection is made
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

//waits for rest button to be pressed to reload page
  const resetButton = document.getElementById("reset-button")

  let el = resetButton.addEventListener("click", function() {
    location.reload()
  })

  // for flavor, changes text color on mouse hover, red can be anything but stuck wit the theme
  let hoverAction = resetButton.addEventListener("mouseover", function(e){
    e.target.style.color = "red";
    setTimeout(function() {
      e.target.style.color = "";
    }, 500);
  }, false);
  
