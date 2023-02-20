const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Issac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolas", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Smauel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menchem', 'Belloc, Hillaire', 'Blair, Robert', 'Blair, Tony',
  'Blake, Willaim'
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in 1550's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
console.table(fifteen)

// Array.prototype.map()
// 1. Return array with inventors full name
const full = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(full)

// Array.prototype.sort()
// 1. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.table(sorted)

// Array.prototype.reduce()
// 1. return total year of inventors lived
const total = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0)
console.log(total)

// sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  let lastGuy = a.passed - a.year
  let nextGuy = b.passed - b.year
  return lastGuy > nextGuy ? -1 : 1
})
console.table(oldest)

