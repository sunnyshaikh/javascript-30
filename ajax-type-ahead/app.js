let cities = []

fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
  .then(res => res.json())
  .then(data => cities.push(...data))
  .catch(err => console.log(err))

function fetchData(word, cities) {
  if (word.lenght < 1) return [];
  return cities.filter(place => {
    const regex = new RegExp(word, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

const inputEle = document.getElementById("input")
const listsEle = document.querySelector(".lists")

inputEle.addEventListener("input", displayCity)

function displayCity() {
  const findMatches = fetchData(this.value, cities)

  const html = findMatches.map(place => {
    let population = parseFloat(place.population).toLocaleString('en-US');
    return `
    <li class="list">
      <span>${place.city}, ${place.state}</span>
      <small>${population}</small>
    </li>
    `
  }).join('')

  console.log(html);

  listsEle.innerHTML = html
}