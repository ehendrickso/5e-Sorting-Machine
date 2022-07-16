
/* take info from https://www.dnd5eapi.co/api/monsters/ (find monsters specifically we're not ready to do all of D&D 5e...but someday...someday)

display only set of drop downs and a search button as default

drop downs set to random as default (making no specifications will automatically bring up a true rando monster)

drop downs - Type - Habitat - Challege Rating(CR) - size 

hit search and will return as cards of monsters that fit the requirements

can set asurle or save monsters to create encounter
*/
const list = document.getElementById("monster-container");

const sizes = document.getElementById('size-select');


async function allMonsters() {
  const res = await fetch("https://www.dnd5eapi.co/api/monsters/")
  const data = await res.json()
  return data.results
}

async function getMonster(ref) {
  const res = await fetch("https://www.dnd5eapi.co" + ref.url)
  return res.json()
}

const monster_refs = await allMonsters()
const monsters = await Promise.all(monster_refs.map(getMonster))



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


  const resetButton = document.getElementById("reset-button")

  let el = resetButton.addEventListener("click", function() {
    location.reload()
  })

  let hoverAction = resetButton.addEventListener("mouseover", function(e){
    e.target.style.color = "purple";
    setTimeout(function() {
      e.target.style.color = "";
    }, 500);
  }, false);
  
