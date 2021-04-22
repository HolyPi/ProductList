import data from './data.json'

export default data 


const allCat = data.map((item) => { return item.category })

const categoryObjects = allCat.reduce((obj, cat) => {
  obj[cat] = 0
  return obj
}, {}) 

const catUnique = Object.keys(categoryObjects)

const catWithCounts = allCat.reduce((obj, cat) => {
    // check if cat exists as a key on obj
    if (obj[cat]) {
    // if so add 
      // 1 to the value of this key
      obj[cat] += 1
    // else 
} else {
      // set this key with a value of 1
      obj[cat] = 1
}
    return obj
  }, {}) 
console.log(allCat)
console.log(catUnique)
console.log(catWithCounts)

const catCount = catUnique.reduce((acc, cat) => {
  acc.push({ name: cat, count: catWithCounts[cat] })
  return acc

}, [])

console.log(catCount)
export { allCat, catCount, catWithCounts, catUnique }